FROM nginx:1.15-alpine
RUN npm run build
COPY dist /etc/nginx/dist
# COPY conf /etc/nginx/
WORKDIR /etc/nginx/html