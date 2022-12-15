FROM nginx:alpine

COPY images /usr/share/nginx/html/images
COPY public /usr/share/nginx/html/public
COPY scripts /usr/share/nginx/html/scripts
COPY styles /usr/share/nginx/html/styles
COPY *.html /usr/share/nginx/html
