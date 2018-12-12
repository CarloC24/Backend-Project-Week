const tagM = require('../db/tagsModel');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await tagM.getTags();
  res.status(200).json(response);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const response = await tagM.getTagsById(id);
    res.status(200).json(response);
  } else {
    res.status(500).json({ message: 'Bad request' });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  if (body) {
    try {
      const response = await tagM.addTag(body);
      res.status(200).json(response);
    } catch {
      res
        .status(500)
        .json({ message: 'Need to put a notes_id field and tags field' });
    }
  } else {
    res.status(500).json({ message: 'Need to put a body' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const response = await tagM.removeTag(id);
    res.status(200).json(response);
  } else {
    res.status(500).json({ message: 'Need to id on req.params' });
  }
});
module.exports = router;
