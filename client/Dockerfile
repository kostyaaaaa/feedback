FROM node:16-alpine3.17

WORKDIR /var/www/client

# Copy local code to the container image.
COPY . .

RUN npm install

# Expose API port
EXPOSE ${CLIENT_PORT}