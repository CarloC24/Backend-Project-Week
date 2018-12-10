const express = require('express');
const server = express();
const ConfigMiddleware = require('./middleware/middleware');
const notesRoutes = require('./routes/notesRoutes');
const todosRoutes = require('./routes/todosRoutes');
const tagsRoutes = require('./routes/tagRoutes');

ConfigMiddleware(server);
server.use('/notes', notesRoutes);
server.use('/todos', todosRoutes);
server.use('/tags', tagsRoutes);
server.get('/', (req, res) => {
  res.send('api running!!');
});

module.exports = server;
