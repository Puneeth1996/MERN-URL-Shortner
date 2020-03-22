FROM node:12.8.0

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY package*.json ./


RUN npm install

COPY . /usr/src/client

EXPOSE 3000

CMD ["npm", "start"]