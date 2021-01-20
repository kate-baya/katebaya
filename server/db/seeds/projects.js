
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Ark Survivor Journal'},
        {id: 2, project_name: 'Project 2'},
        {id: 3, project_name: 'Project 3'}
      ]);
    });
};
