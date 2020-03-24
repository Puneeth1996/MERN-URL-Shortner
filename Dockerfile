FROM node:12.8.0

RUN mkdir /usr/src/server
WORKDIR /usr/src/server

COPY package*.json ./


RUN npm install

COPY . /usr/src/server

EXPOSE 5000

CMD ["npm", "run", "test"]