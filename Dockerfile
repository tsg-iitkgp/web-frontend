# Build
FROM node:14-alpine

WORKDIR /webapp

RUN yarn global add serve

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --silent

COPY . .

RUN yarn build

CMD ["serve", "-s", "build"]
