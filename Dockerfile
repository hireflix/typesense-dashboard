FROM node:16-alpine as builder

WORKDIR /app
RUN yarn global add @quasar/cli

COPY package.json package-lock.json yarn.lock ./
RUN yarn install

COPY . .
ENV PUBLIC_PATH /
RUN quasar build


FROM caddy:2-alpine

WORKDIR /srv
COPY --from=builder /app/dist/spa/ ./

EXPOSE 80
CMD ["caddy", "file-server"]
