const express = require('express');
const dbM = require('../db/notesModel');
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await dbM.getNotes();
  res.status(200).json(response);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await dbM.getNotes(id);
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

router.put('/:id');

router.delete('/:id');

module.exports = router;
