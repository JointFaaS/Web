FROM nginx:stable-alpine
COPY web.conf /etc/nginx/conf.d
COPY dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]