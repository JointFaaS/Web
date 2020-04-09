FROM node:13 AS build
WORKDIR /build
COPY . /build
RUN yarn install && yarn build

FROM nginx:stable-alpine
COPY web.conf /etc/nginx/conf.d
COPY --from=builder /build/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]