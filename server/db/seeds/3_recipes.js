exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'Miso Ginger Tofu and Rice Bowl',
          season_id: 1,
          rating: 4.8,
          image: '/images/ginger_miso.jpg',
          cook_time_id: 1
        },
        {
          id: 2,
          title: 'Shakshuka',
          season_id: 3,
          rating: 4.8,
          image: '/images/shakshuka.jpg',
          cook_time_id: 2
        },
        {
          id: 3,
          title: 'Pesto Spaghetti with Pumpkin',
          season_id: 1,
          rating: 4.4,
          image: '/images/Pesto-Pasta.jpg',
          cook_time_id: 1
        }
      ])
    })
}
