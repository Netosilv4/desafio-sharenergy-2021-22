FROM node:14.18.1-alpine


WORKDIR /app

ENV PATH /app/share-energy-client/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

RUN npm install react-scripts --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]