const express = require('express');
const config = require('../config');
const Redis = require('redis');

const serverConfig = config.server;
const redisConfig = config.redis;

const redis = Redis.createClient(redisConfig.port, redisConfig.host);

const app = express();

app.get('/', async (req, res) => {
	res.send('Welcome');
});

app.get('/keys', async (req, res) => {
	redis.keys('*', (err, keys) => {
		res.json(keys);
	});
});

app.listen(serverConfig.port, serverConfig.host, () => {
	console.log(`app running on http://${serverConfig.host}:${serverConfig.port}`);
});