FROM node:18
WORKDIR /usr/src/app
#copy all items from outside the container inside the container
COPY . .
RUN npm install --production
RUN npm run build
CMD [ "npm", "start"]