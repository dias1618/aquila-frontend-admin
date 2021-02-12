FROM node:14.13.1-alpine3.10 as build
RUN apk --no-cache add git
WORKDIR /usr/src/app
RUN git clone https://github.com/dias1618/aquila-frontend-admin.git
WORKDIR /usr/src/app/aquila-frontend-admin
RUN npm i
RUN npm run build
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /usr/share/nginx/html
COPY --from=build /usr/src/app/aquila-frontend-admin/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

