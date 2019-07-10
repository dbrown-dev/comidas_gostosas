exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'David',
          last_name: 'Brown',
          email: 'david.brown@windowslive.com'
        },
        {
          id: 2,
          first_name: 'Daphne',
          last_name: 'Barros Melo',
          email: 'daphne.barros@gmail.com'
        },
        {
          id: 3,
          first_name: 'Eda',
          last_name: 'de Lourdes Barros',
          email: 'eda@gmail.com'
        }
      ])
    })
}
