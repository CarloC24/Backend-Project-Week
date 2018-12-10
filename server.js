const express = require('express');
const server = express();
const ConfigMiddleware = require('./middleware/middleware');
const notesRoutes = require('./routes/notesRoutes');
const todosRoutes = require('./routes/todosRoutes');

ConfigMiddleware(server);
server.use('/notes', notesRoutes);
server.use('/todos', todosRoutes);

server.get('/', (req, res) => {
  res.send('api running!!');
});

module.exports = server;
