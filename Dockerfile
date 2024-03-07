# Build stage
FROM node:14-alpine AS build

WORKDIR /webapp

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --silent

COPY . .

RUN yarn build

# Production stage
FROM nginx:stable-alpine

COPY --from=build /webapp/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
