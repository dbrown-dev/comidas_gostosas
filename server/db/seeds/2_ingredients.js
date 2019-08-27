exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, label: 'Pumpkin' },
        { id: 2, label: 'Olive Oil' },
        { id: 3, label: 'Shallot' },
        { id: 4, label: 'Garlic' },
        { id: 5, label: 'Cherry Tomatoes' },
        { id: 6, label: 'Spaghetti' },
        { id: 7, label: 'Basil Pesto' },
        { id: 8, label: 'Parmesan Cheese' },
        { id: 9, label: 'Rocket Leaves' },
        { id: 10, label: 'Kalamata Olives' },
        { id: 11, label: 'Basil Leaves' },
        { id: 12, label: 'Walnuts' },
        { id: 13, label: 'Capsicum' },
        { id: 14, label: 'Brown Onion' },
        { id: 15, label: 'Cumin' },
        { id: 16, label: 'Smoked Paprika' },
        { id: 17, label: 'Italian Chopped Tomatoes' },
        { id: 18, label: 'Salt' },
        { id: 19, label: 'Black Pepper' },
        { id: 20, label: 'Egg' },
        { id: 21, label: 'Feta Cheese' },
        { id: 22, label: 'White Rice' },
        { id: 23, label: 'Carrot' },
        { id: 24, label: 'Soy Sauce' },
        { id: 25, label: 'Firm Tofu' },
        { id: 26, label: 'CornFlour' },
        { id: 27, label: 'Ginger Miso Sauce' },
        { id: 28, label: 'Water' },
        { id: 29, label: 'Mayonnaise' },
        { id: 30, label: 'Avocado' },
        { id: 31, label: 'Sesame Seeds' }
      ])
    })
}
