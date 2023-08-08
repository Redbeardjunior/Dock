FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install express
COPY . .
CMD [ "node", "app.js" ]