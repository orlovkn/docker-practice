const express = require('express');
const app = express();

app.get('/test', (req, res) => {
	res.send('Our api server is working corectly');
});

app.listen(3001, () => {
	console.log('Started api service')
})