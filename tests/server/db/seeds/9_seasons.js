
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('seasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('seasons').insert([
        {id: 1, season: 'Summer'},
        {id: 2, season: 'Autumn'},
        {id: 3, season: 'Winter'},
        {id: 4, season: 'Spring'}
      ]);
    });
};
