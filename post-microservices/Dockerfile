FROM node:16-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "dev" ]
