const express = require('express');
const server = express();
const ConfigMiddleware = require('./middleware/middleware');

ConfigMiddleware(server);

server.get('/', (req, res) => {
  res.send('api running!!');
});

module.exports = server;
