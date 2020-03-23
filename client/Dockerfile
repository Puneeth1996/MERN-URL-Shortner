FROM node

WORKDIR /usr/src/client

COPY package.json ./


RUN yarn install

COPY /src /usr/src/client

EXPOSE 3000

CMD ["npm", "run", "start"]