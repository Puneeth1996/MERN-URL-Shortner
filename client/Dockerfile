FROM node

RUN mkdir -p /usr/src/server/client
WORKDIR /usr/src/server/client

COPY package*.json ./


RUN npm install

COPY . /usr/src/server/client

EXPOSE 3000

CMD ["npm", "start"]