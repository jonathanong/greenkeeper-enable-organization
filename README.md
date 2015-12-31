
# greenkeeper-enable-organization

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Enable [greenkeeper](http://greenkeeper.io) on your entire organization.

First, save your GitHub credentials as environment variables:

```bash
export GITHUB_USERNAME=<your username>
export GITHUB_PASSWORD=<your password>
```

Make sure you have `greenkeeper` installed:

```bash
npm i -g greenkeeper
greenkeeper login
```

Then run this:

```bash
npm i -g greenkeeper-enable-organization
greenkeeper-enable-organization <your organization>
```

[npm-image]: https://img.shields.io/npm/v/greenkeeper-enable-organization.svg?style=flat-square
[npm-url]: https://npmjs.org/package/greenkeeper-enable-organization
[travis-image]: https://img.shields.io/travis/jonathanong/greenkeeper-enable-organization.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/greenkeeper-enable-organization
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/greenkeeper-enable-organization/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/greenkeeper-enable-organization
[david-image]: http://img.shields.io/david/jonathanong/greenkeeper-enable-organization.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/greenkeeper-enable-organization
[license-image]: http://img.shields.io/npm/l/greenkeeper-enable-organization.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/greenkeeper-enable-organization.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/greenkeeper-enable-organization
