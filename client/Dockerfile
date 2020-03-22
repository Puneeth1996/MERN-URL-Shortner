FROM node:12.8.0

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package*.json ./


RUN npm install

COPY . /srv/app/client

EXPOSE 3000

CMD ["npm", "start"]