const db = require('./dbinit');

module.exports = { getNotes, addNotes, updateNotes, deleteNotes };

function getNotes(id) {
  if (id) {
    return db('notes').where({ id });
  } else {
    return db('notes');
  }
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
