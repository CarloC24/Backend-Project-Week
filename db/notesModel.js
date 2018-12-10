const db = require('./dbinit');

module.exports = { getNotes, getNotesById, addNotes, updateNotes, deleteNotes };

function getNotes() {
  return db('notes');
}

function getNotesById(id) {
  return db('notes')
    .where({ id })
    .first();
}

function addNotes(notes) {
  return db('notes').insert(notes);
}

function updateNotes(id, note) {
  return db('notes')
    .where({ id })
    .update(note);
}

function deleteNotes(id) {
  return db('notes')
    .where({ id })
    .del();
}
