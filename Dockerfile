FROM nginx:alpine
RUN /bin/sh -c "apk add --no-cache bash"

COPY ./build  /usr/share/nginx/html
COPY ./genny.properties /usr/share/nginx/html/
COPY ./docker-entrypoint.sh  /var/cache/nginx/
#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT [ "/var/cache/nginx/docker-entrypoint.sh" ]

#CMD ["-g", "0.0.0.0"]
