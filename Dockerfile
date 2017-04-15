FROM mhart/alpine-node:7.7.1
RUN apk add -U curl
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir /app && cp -a /tmp/node_modules /app/
COPY . /app
WORKDIR /app
EXPOSE 1337
CMD ["npm", "start"]
