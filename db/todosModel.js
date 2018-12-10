const db = require('./dbinit');

module.exports = {
  getTodos,
  getTodosById,
  getByNotesId,
  addTodos,
  updateTodos,
  deleteTodos
};
function getTodos() {
  return db('todos');
}

function getTodosById(id) {
  return db('todos')
    .where({ id: id })
    .first();
}

function getByNotesId(id) {
  return db('todos').where({ notes_id: id });
}

function addTodos(todos) {
  return db('todos').insert(todos);
}

function updateTodos(id, todo) {
  return db('todos')
    .where({ id })
    .update(todo);
}

function deleteTodos(id) {
  return db('todos')
    .where({ id })
    .del();
}
