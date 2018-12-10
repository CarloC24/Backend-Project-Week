const express = require('express');
const server = express();
const ConfigMiddleware = require('./middleware/middleware');
const notesRoutes = require('./routes/notesRoutes');

ConfigMiddleware(server);
server.use('/notes', notesRoutes);

server.get('/', (req, res) => {
  res.send('api running!!');
});

module.exports = server;
