# ![RealWorld Example App](logo.png)

> ### hapi.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.


### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged fullstack application built with **hapi.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **hapi.js** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works

> Describe the general architecture of your app here

# Getting started


Install deps
```bash
docker-compose run --rm --no-deps api npm i
```

Running migrations
```bash
docker-compose run --rm api npm run migrate:latest
```

Lift the containers
```
docker-compose up api
```

