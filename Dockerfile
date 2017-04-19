FROM nginx:alpine 

COPY ./dist /usr/share/nginx/html
RUN rm -Rf /usr/share/nginx/html/index.html
