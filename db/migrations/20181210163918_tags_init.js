exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', tbl => {
    tbl.increments();
    tbl.integer('notes_id').notNullable();
    tbl
      .string('tags')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
