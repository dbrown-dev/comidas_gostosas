exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        { id: 1, measurement_name: 'Cup' },
        { id: 2, measurement_name: 'Teaspoon' },
        { id: 3, measurement_name: 'Gram' },
        { id: 4, measurement_name: 'Tablespoon' },
        { id: 5, measurement_name: 'Colve' },
        { id: 6, measurement_name: 'Can' },
        { id: 7, measurement_name: 'Punnet' },
        { id: 8, measurement_name: 'Handfuls' },
        { id: 9, measurement_name: 'None' }
      ])
    })
}
