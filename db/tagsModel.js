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

function getTagsById() {
  return db('tags').where({ id });
}

function addTag(tag) {
  return db('tags').insert(tag);
}

function removeTag(id) {
  return db('tags')
    .where({ id })
    .del();
}
