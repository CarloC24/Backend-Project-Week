exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', tbl => {
    tbl.increments();
    tbl.string('title').notNullable();
    tbl.string('textBody').notNullable();
    tbl.string('tags').defaultTo([]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
