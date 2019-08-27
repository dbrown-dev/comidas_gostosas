exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        { id: 1, label: 'Cup' },
        { id: 2, label: 'Teaspoon' },
        { id: 3, label: 'Gram' },
        { id: 4, label: 'Tablespoon' },
        { id: 5, label: 'Colve' },
        { id: 6, label: 'Can' },
        { id: 7, label: 'Punnet' },
        { id: 8, label: 'Handfuls' },
        { id: 9, label: 'None' }
      ])
    })
}
