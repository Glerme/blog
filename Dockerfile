FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN NODE_ENV=development yarn install

ARG API_URL
ENV API_URL ${API_URL}

COPY . . 

RUN touch .env && yarn build

CMD ["yarn", "start"]
