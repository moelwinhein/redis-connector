const express = require('express');
const config = require('../config');
const serverConfig = config.server;
const redisConfig = config.redis;

const app = express();

app.listen(serverConfig.port, serverConfig.host, () => {
	console.log(`app running on http://${serverConfig.host}:${serverConfig.port}`);
});