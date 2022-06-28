# 開発環境向け
FROM node:16-alpine as dev-env
WORKDIR /app
EXPOSE 3000
ENV HOST 0.0.0.0
RUN apk update && \
    yarn global add create-nuxt-app

# ビルド環境向け
FROM node:16-alpine as build-env
WORKDIR /app
COPY . /app
RUN apk update
RUN yarn build

# 本番環境向け
FROM node:16-alpine
WORKDIR /app
COPY . /app

# ビルド環境から成果物をコピー
COPY --from=build-env /app/.nuxt /app/.nuxt

# 本番ではdevDepsを消してファイルサイズを削減
RUN yarn install --production
EXPOSE 3000
CMD ["yarn", "start"]
