FROM node:14.18.1-alpine

WORKDIR /server

COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "dev"]