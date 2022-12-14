FROM nginx:alpine
COPY images /usr/share/nginx/html
COPY public /usr/share/nginx/html
COPY scripts /usr/share/nginx/html
COPY styles /usr/share/nginx/html