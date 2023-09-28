FROM nginx:1.15-alpine
COPY dist /etc/nginx/dist
# COPY conf /etc/nginx/
WORKDIR /etc/nginx/html


