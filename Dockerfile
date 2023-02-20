FROM node:18.14.1-alpine3.17 as ts-compile
WORKDIR /usr/tc-dynamo-dal
COPY yarn*.lock ./
COPY tsconfig*.json ./
COPY ~/.npmrc ./
RUN yarn
COPY . ./
RUN yarn run build:app

FROM node:18.14.1-alpine3.17 as ts-remove
WORKDIR /usr/tc-dynamo-dal
COPY --from=ts-compile /usr/tc-dynamo-dal/yarn*.lock ./
COPY --from=ts-compile /usr/tc-dynamo-dal/dist ./
RUN yarn --omit=dev

FROM gcr.io/distroless/nodejs:18
WORKDIR /usr/tc-dynamo-dal
COPY --from=ts-remove /usr/tc-dynamo-dal ./
USER 1000
CMD ["app.js"]


