FROM node

WORKDIR /usr/src/app/client

COPY package.json ./


RUN yarn install

COPY /src /usr/src/app/client

EXPOSE 3000

CMD ["npm", "run", "start"]