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

### docker hub

https://github.com/gliderlabs/docker-alpine

https://hub.docker.com/_/alpine

```
FROM node:13.12.0-alpine
```

### commands
```
restart: unless-stopped
```

```
docker-compose up --build
```


### some commands

list of containers
```
docker container ls -a
```

remove container
```
docker container rm a6c0a7d9f25a
```

list of images
```
docker image ls
```

remove image
```
docker image rm 89cff77bb67c 2b9604a36e49 bf756fb1ae65
```

### add a connection with db
[mongodb](https://docs.atlas.mongodb.com/getting-started/)

[mongoosejs](https://mongoosejs.com/docs/)

```
npm install mongoose
```

```
docker logs blog-docker_api_db_1
```
