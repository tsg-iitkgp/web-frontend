# Build
FROM node:20-alpine

WORKDIR /webapp

RUN npm install --global serve

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile --silent

COPY . .

RUN npm start build

CMD ["serve", "-s", "build"]
