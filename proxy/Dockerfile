FROM node:erbium-alpine
RUN apk update && apk add --no-cache bash
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json .
RUN npm install

COPY . /src/app
EXPOSE 80

CMD [ "sh", "-c", "npm run docker && npm start" ]