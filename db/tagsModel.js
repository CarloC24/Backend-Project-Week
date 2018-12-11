const db = require('./dbinit');

module.exports = {
  getTags,
  getTagsById,
  addTag,
  removeTag
};

function getTags() {
  return db('tags');
}

function getTagsById(id) {
  return db('tags').where({ notes_id: id });
}

function addTag(tag) {
  return db('tags').insert(tag);
}

function removeTag(id) {
  return db('tags')
    .where({ id })
    .del();
}
