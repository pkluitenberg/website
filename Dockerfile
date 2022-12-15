FROM nginx:alpine
# copy nginx configuration
COPY ./nginx.conf /usr/share/nginx/nginx.conf
#copying assets
COPY images /usr/share/nginx/html/images
COPY public /usr/share/nginx/html/public
COPY scripts /usr/share/nginx/html/scripts
COPY styles /usr/share/nginx/html/styles
COPY *.html /usr/share/nginx/html/html
