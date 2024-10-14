<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project structure

This application was developed with with a well-defined directory structure.

```js

POSTGRES TEMPLATE NEST JS
├─ .husky
│   ├─ commit-msg
│   ├─ pre-commit
├── node_modules
├── src
│   ├── config
│   │   └── appconfig.service.ts
│   ├── core
│   │   ├── constants
│   │   │   └── decorator.constant.ts
│   │   ├── decorators
│   │   │   ├── authorization.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   ├── enums
│   │   │   └── app-role.enum.ts
│   │   │   └── data-type.enum.ts
│   │   ├── guards
│   │   │   ├── authorization.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── logger
│   │   │   └── app-logger.ts
│   │   ├── middleware
│   │   │   ├── error-handler.ts
│   │   │   ├── index.ts
│   │   │   ├── request-handler.ts
│   │   │   └── response-handler.ts
│   │   ├── swagger
│   │   │   └── doc.swagger.ts
│   │   ├── utils
│   │       └── timestamp.utils.ts
│   │   ├── bootstrap.ts
│   │   ├── core.module.ts
│   │   ├── cors.config.ts
│   │   ├── index.ts
│   │   └── providers.ts
│   ├── database
│   │   ├── pgsql
│   │   │    ├── abstract
│   │   │    │   └── auth.abstract.ts
│   │   │    │   
│   │   │    ├── connection
│   │   │    │   ├── connection.pgsql.ts
│   │   │    │   ├── constants.pgsql.ts
│   │   │    │   ├── models.connection.pgsql.ts
│   │   │    │   ├── schemas.pgsql.ts
│   │   │    │   └── tables.pgsql.ts
│   │   │    ├── dao
│   │   │    │   └── auth.dao.ts
│   │   │    ├── index.ts
│   │   ├── database.module.ts
│   │   └── database.service.ts
│   ├── modules
│   │   ├── app
│   │   │   ├── app.controller.spec.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.service.ts
│   │   └── auth
│   │   │   ├── app.controller.spec.ts
│   │   │   ├── auth.abstract.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   ├── shared
│   │    ├── appresponse.shared.ts
│   │    ├── index.ts
│   │    ├── messages.shared.ts
│   │    └── restapi-request.shared.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json/
├── .commitlintrc.json
├── .env.development
├── .env.prod
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
└── .swcrc
├── azure-pipelines.yml
├── ecosystem.config.js
├── jest.config.ts
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
