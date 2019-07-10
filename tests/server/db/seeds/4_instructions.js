exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 2,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 3,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 4,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 5,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 6,
          recipe_id: 1,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 7,
          recipe_id: 2,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 8,
          recipe_id: 2,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 9,
          recipe_id: 2,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 10,
          recipe_id: 2,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 11,
          recipe_id: 2,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 12,
          recipe_id: 3,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 13,
          recipe_id: 3,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 14,
          recipe_id: 3,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 15,
          recipe_id: 3,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        },
        {
          id: 16,
          recipe_id: 3,
          image: '/images/food.png',
          instruction:
            'Doggo ipsum boofers doggorino blop dat tungg tho very jealous pupper many pats length boy, shoober heckin good boys blep fat boi. Heckin good boys and girls long woofer.'
        }
      ])
    })
}
