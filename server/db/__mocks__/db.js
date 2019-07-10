
const getRecipeSummaries = async (id) => {
  const results = id ? {
    id: 1,
    title: 'test recipe',
    season: 'Summer',
    rating: 4.8,
    image: '/images/test.jpg',
    time_options: 'Quick',
    cuisine_categories: 'Asian@Rice@Vegetarian'
  } : [{
    id: 1,
    title: 'Miso Ginger Tofu and Rice Bowl',
    season: 'Summer',
    rating: 4.8,
    image: '/images/ginger_miso.jpg',
    time_options: 'Quick',
    cuisine_categories: 'Asian@Rice@Vegetarian'
  },
  {
    id: 2,
    title: 'Shakshuka',
    season: 'Winter',
    rating: 4.8,
    image: '/images/shakshuka.jpg',
    time_options: 'Medium',
    cuisine_categories: 'Vegetarian@Mediterranean@Rice'
  },
  {
    id: 3,
    title: 'Pesto Spaghetti with Pumpkin',
    season: 'Summer',
    rating: 4.4,
    image: '/images/Pesto-Pasta.jpg',
    time_options: 'Quick',
    cuisine_categories: 'Italian@Vegetarian@Pasta'
  }]
  return Promise.resolve(results)
}

const getRecipeInstructions = (id) => {
  const results = [
    {
      id: 1,
      instruction: "test.",
      image: "/images/food.png"
    },
    {
      id: 2,
      instruction: "test.",
      image: "/images/food.png"
    }
  ]
  return Promise.resolve(results)
}

const getRecipeIngredients = async (id) => {
  const results = [
    {
      id: 22,
      name: "White Rice",
      quantity: 1,
      ingredient_group: "Rice Bowl",
      measurement_name: "Cup"
    },
    {
      id: 23,
      name: "Carrot",
      quantity: 1,
      ingredient_group: "Rice Bowl",
      measurement_name: "None"
    }
  ]
  return Promise.resolve(results)
}

const getCookTimeOptions = async () => {
  const results = [
    {
      "id": 1,
      "timeOptions": "Quick"
    },
    {
      "id": 2,
      "timeOptions": "Medium"
    },
    {
      "id": 3,
      "timeOptions": "Long"
    }
  ]
  return Promise.resolve(results)
}

const getSeasons = async () => {
  const results = [
    {
      "id": 1,
      "season": "Summer"
    },
    {
      "id": 2,
      "season": "Autumn"
    },
    {
      "id": 3,
      "season": "Winter"
    },
    {
      "id": 4,
      "season": "Spring"
    }
  ]
  return Promise.resolve(results)
}

const getCategories = async () => {
  const results = [
    { id: 1, category_name: 'Italian' },
    { id: 2, category_name: 'Vegetarian' },
    { id: 3, category_name: 'Mediterranean' },
    { id: 4, category_name: 'Asian' },
    { id: 5, category_name: 'Pasta' },
    { id: 6, category_name: 'Rice' }
  ]
  return Promise.resolve(results)
}

const getIngredients = (db = database) => {
  return db('ingredients').select()
}

const getMeasurements = (db = database) => {
  return db('measurements').select()
}

const insertRecipe = (
  recipeSummary,
  cuisineCategories,
  ingredients,
  instructions
) => {

}

const updateRecipeById = (id, recipe, db = database) => {

}

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  getRecipeSummaries,
  getRecipeInstructions,
  getRecipeIngredients,
  getCookTimeOptions,
  insertRecipe,
  updateRecipeById,
  getSeasons,
  getCategories,
  getIngredients,
  getMeasurements,
  close
}