FROM node:7.10.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 3001

CMD [ "npm", "start" ]