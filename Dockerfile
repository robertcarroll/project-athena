FROM node:16.13-alpine as builder
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
ADD . /app/
RUN yarn run build

FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/dist/project-athena /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80