## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## List of api

- get data of chart: http://localhost:3000/data_chart

## Setting of typeorm

- run: yarn add @nestjs/typeorm typeorm pg @nestjs/config

## Create new migrations

- to create a new empty migration, via command: yarn migration:create
- or to generate a new migration, via command: yarn migration:generate
- to run build for migration (dist/migrations): yarn build
- to execute migration, via command: yarn migration:run
- to revert, via command: yarn migration:revert

## Settings of docker for DB

- run docker container of postgres DB: docker run --name yuit-chart-database -d -p 5432:5432 -i -t -e POSTGRES_DB=yuit-chart-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=adminyuitpassword postgres
- check container: docker ps -a
- exect inside to container: docker exec -it yuit-chart-database sh
- remove container: docker rm -f CONTAINER_ID

## Settings of docker image for backend

- build image for local: docker build . -t yuit-chart-backend-image -f infra/docker/Dockerfile
- run container: docker run -p 127.0.0.1:8080:3000/tcp -d yuit-chart-backend-image
- check container: docker ps -a

## Settings of docker container for backend with network

- create network: docker network create -d bridge yuit-net
- check network: docker network ls
- run docker container of postgres DB: docker run --network=yuit-net --name yuit-chart-db-host --rm -d -p 5432:5432 -i -t -e POSTGRES_DB=yuit-chart-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=adminyuitpassword postgres
- build image for local: docker build . -t yuit-chart-backend-image -f infra/docker/Dockerfile
- run container: docker run --network=yuit-net --name yuit-chart-backend -d -p 127.0.0.1:8080:8080/tcp yuit-chart-backend-image
- exect inside to container: docker exec -it yuit-chart-backend sh -c 'ping yuit-chart-db-host'

## License

Nest is [MIT licensed](LICENSE).
