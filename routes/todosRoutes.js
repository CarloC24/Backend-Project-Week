const todosM = require('../db/todosModel');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await todosM.getTodos();
    res.status(200).json(response);
  } catch {
    res.status(500).json({ message: 'Bad Request' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await todosM.getTodosById(id);
  res.status(200).json(response);
});

router.post('/', async (req, res) => {
  const body = req.body;

  if (body) {
    try {
      const response = await todosM.addTodos(body);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ message: 'error' });
    }
  } else {
    res.status(404).json({ message: 'Please put a notes_id, task field' });
  }
});

router.put('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  if (body && id) {
    try {
      const response = await todosM.updateTodos(id, body);
      res.status(200).json({ message: `Updated todos with ${id}` });
    } catch (err) {
      res.status(500).json({ message: 'error' });
    }
  } else {
    res.status(404).json({ message: 'Please put a notes_id, task field' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const response = await todosM.deleteTodos(id);
      res.status(200).json({ message: `Deleted todos with ${id}` });
    } catch (err) {
      res.status(500).json({ message: 'error' });
    }
  } else {
    res.status(404).json({ message: 'Please put a id on the params' });
  }
});

module.exports = router;
