FROM node:16-alpine3.17

WORKDIR /var/www/clear

# Copy local code to the container image.
COPY . .

RUN npm install

# install global dependencies
RUN npm i -g pm2

# Expose API port
EXPOSE ${CLEAR_PORT}