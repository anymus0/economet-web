# 1st stage
FROM node AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

# 2nd stage
FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
CMD [ "nginx", "-g", "daemon off;" ]