FROM node:18.11.0-alpine3.16 as ts-compile
WORKDIR /usr/tc-dynamo-dal
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build:app

FROM node:18.11.0-alpine3.16 as ts-remove
WORKDIR /usr/tc-dynamo-dal
COPY --from=ts-compile /usr/tc-dynamo-dal/package*.json ./
COPY --from=ts-compile /usr/tc-dynamo-dal/dist ./
RUN npm install --omit=dev

FROM gcr.io/distroless/nodejs:18
WORKDIR /usr/tc-dynamo-dal
COPY --from=ts-remove /usr/tc-dynamo-dal ./
USER 1000
CMD ["app.js"]


