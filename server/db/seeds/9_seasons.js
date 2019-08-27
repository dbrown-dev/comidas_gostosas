exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('seasons')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('seasons').insert([
        { id: 1, label: 'Summer' },
        { id: 2, label: 'Autumn' },
        { id: 3, label: 'Winter' },
        { id: 4, label: 'Spring' }
      ])
    })
}
