# build app
FROM node:20.16-alpine AS build
WORKDIR /app
COPY . /app

ENV DATABASE_HOST=yuit-chart-db-host

RUN yarn install
RUN echo "Build is ok! Go to next layer!"
RUN yarn build

EXPOSE 8080

# start migration and api
CMD npm run migration:prod && npm run start:prod
