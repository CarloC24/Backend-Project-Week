const express = require('express');
const dbM = require('../db/notesModel');
const tdM = require('../db/todosModel');
const tagsM = require('../db/tagsModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await dbM.getNotes();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: 'Bad Request' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await dbM.getNotesById(id);
  response.todos = await tdM.getByNotesId(id);
  response.tags = await tagsM.getTagsById(id);
  res.status(200).json(response);
});

router.post('/', async (req, res) => {
  const note = req.body;
  if (note) {
    try {
      const response = await dbM.addNotes(note);
      res.status(201).json({ message: `User created with id of ${response}` });
    } catch (err) {
      res.status(500).json({ message: 'Bad request' });
    }
  } else {
    res.status(500).json({ message: 'Bad Request' });
  }
});

router.put('/:id', async (req, res) => {
  const note = req.body;
  const { id } = req.params;
  if (note && id) {
    try {
      const response = await dbM.updateNotes(id, note);
      res.status(200).json({ message: `User updated with id of ${response}` });
    } catch (err) {
      res.status(500).json({ message: 'Bad request' });
    }
  } else {
    res.status(500).json({ message: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const response = await dbM.deleteNotes(id);
      res.status(200).json({ message: 'Success deleting notes' });
    } catch (err) {
      res.status(404).json({ message: `No user found a id ${id}` });
    }
  } else {
    res.status(500).json({ message: 'Bad Request' });
  }
});

module.exports = router;
