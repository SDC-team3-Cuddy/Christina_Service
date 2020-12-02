# GuitarCentaur - System Design Capstone

> Optimizing database managment system to support scaling the existing service

## Related Projects

  - https://github.com/hrr49-tully
  - https://github.com/mmickeyd
  - https://github.com/hrr49-tully/Guitar-Centaur-Reviews-Service
  - https://github.com/hrr49-tully/Guitar-Centaur-Add-to-Cart
  - https://github.com/hrr49-tully/Guitar-Centaur-Carousel

  - https://github.com/SDC-team3-Cuddy
  - https://github.com/SDC-team3-Cuddy/Rebecca-SDCService
  - https://github.com/SDC-team3-Cuddy/Frans-Server

## Table of Contents

1. [CRUD API] (#CRUD API)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)

## CRUD API

Action | Method | URL
-------|--------|-----
Create a new review | POST | /api/reviews
Get review information | GET | /api/reviews/:id
Update review information | PUT | /api/reviews/:id
Delete a review | DELETE | /api/reviews/:id

## Usage

> This is a standalone version of a review component from Guitar Center's website that will have full functionaliy to sort by lowest/highest reviews as well as best rated, oldest, etc.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

