FROM node:16-alpine3.17

WORKDIR /var/www/feedback

# to avoid errors with bcrypt module
RUN apk --no-cache add --virtual builds-deps build-base python3

# Copy local code to the container image.
COPY . .

RUN npm install

# install global dependencies
RUN npm i -g pm2

# Expose API port
EXPOSE ${FEEDBACK_PORT}