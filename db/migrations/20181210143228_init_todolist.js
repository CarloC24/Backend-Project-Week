exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', tbl => {
    tbl.increments();
    tbl.string('task').notNullable();
    tbl
      .integer('notes_id')
      .notNullable()
      .references('id')
      .inTable('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
