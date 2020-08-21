const express = require('express');
const {host, port, db} = require('./configuration');
const { connectDb } = require('./helpers/db');

const app = express();

// const port = process.env.PORT;
// const host = process.env.HOST

app.get('/test', (req, res) => {
	res.send('Our api server is working corectly');
});

const startServer = () => {
	app.listen(port, () => {
		console.log(`Started api service on port: ${port}`);
		console.log(`on host ${host}`)
		console.log(`database ${db}`)
	})
}

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer);