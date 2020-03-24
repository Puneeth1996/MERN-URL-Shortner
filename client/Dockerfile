FROM node:12.8.0

RUN mkdir -p /usr/src/server/client

WORKDIR /usr/src/server/client

ENV PATH /usr/src/server/client.bin:$PATH

COPY package*.json ./

COPY . /usr/src/server/client

RUN npm install


EXPOSE 3000

CMD ["npm", "start"]

