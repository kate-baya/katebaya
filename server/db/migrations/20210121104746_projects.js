
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('project_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
