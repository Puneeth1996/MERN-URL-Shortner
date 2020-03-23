FROM node

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install

CMD ["npm", "run", "test"]