const data = require('../data.json');
const CHUNK_SIZE = 10;

exports.up = async function (knex) {
  await knex.schema
    .createTable('songs', function (table) {
      table.increments('id');
      table.string('title', 255).notNullable();
      table.string('uri', 255).notNullable();
    });

  return knex.batchInsert('songs', data, CHUNK_SIZE);
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("songs")
};
