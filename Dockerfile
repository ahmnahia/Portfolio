FROM node:20.18.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

LABEL maintainer="Ahmad Abounahia <abounahiaahmad@gmail.com>"

EXPOSE 3001

CMD npm run start