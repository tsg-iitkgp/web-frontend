# Build
FROM node:14-alpine

WORKDIR /webapp

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --silent

COPY . .

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "build"]
