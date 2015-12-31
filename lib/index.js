'use strict'

const debug = require('debug')('greenkeeper-enable-organization')
const exec = require('mz/child_process').exec
const request = require('requisition')
const Batch = require('batch-then')
const assert = require('assert')

const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const GITHUB_PASSWORD = process.env.GITHUB_PASSWORD

assert(GITHUB_USERNAME, 'Github username required.')
assert(GITHUB_PASSWORD, 'Github password required.')

module.exports = organization => {
  const batch = new Batch()

  batch.push(() => findRepositories(`https://api.github.com/orgs/${organization}/repos`))

  return batch

  function findRepositories (url) {
    return request(url)
    .auth(GITHUB_USERNAME, GITHUB_PASSWORD)
    .then(response => {
      return response.json().then(body => {
        debug(body)
        if (response.status !== 200) return console.error(body)

        for (const repo of body) {
          batch.push(() => enableRepository(repo.name))
        }
        const links = response.links
        debug(links)
        if (links && links.next) batch.push(() => findRepositories(links.next.url))
      })
    })
  }

  function enableRepository (name) {
    return exec(`greenkeeper --slug=${organization}/${name} enable`)
      .then(out => console.log(out[0] || out[1]))
      .catch(err => console.error(err.stack))
  }
}
