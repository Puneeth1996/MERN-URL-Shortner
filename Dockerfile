FROM node:12.8.0

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package*.json ./


RUN npm install

COPY . /srv/app/server

EXPOSE 5000

CMD ["npm", "run", "test"]