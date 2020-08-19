## docker instruction

### install docker and docker-composer

```
sudo apt install docker
sudo apt install docker-compose
```

### step 1

create a file
```
touch docker-compose.yml
```

with commands
```
version: '3'

services:
  api:
    build: ./api
```

### step 2

add a new file inside api with a name **Docker**
```
FROM node:13
```

run building of image
```
docker-compose build
```

### step 3

install express framework

```
npm install express
```

### step 4

inside **api** directory create src with a file **index.js** with routers
```
const express = require('express');
const app = express();

app.get('/test', (req, res) => {
	res.send('Our api server is working corectly');
});

app.listen(3000, () => {
	console.log('Started api service')
})
```

### step 5
inside package.json write a command

```
"scripts": {
    "start": "node src/index.js"
},
```

run server

```
npm run start
```

### docker commands
```
docker images
docker images | grep node
```

### step 6: set up Docker file
```
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
```

build
```
docker-compose build
```


### Запуск API сервера
add into docker-compose file
```
    command: npm run start
    ports:
      - "3000:3000"
```

```
docker-compose up
```