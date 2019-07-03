import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/'

export const getRecipesSummary = () => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'recipes').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getRecipeDetail = async recipeId => {
  const recipe = await request.get(apiUrl + 'recipes/' + recipeId)
  return recipe.body
}

export const getCookTimes = () => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'cooktimes').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getSeasons = () => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'seasons').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'categories').end((error, res) => {
      console.log(res.body)
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const addRecipe = (recipe, callback) => {
  request
    .post(apiUrl)
    .send(recipe)
    .end((err, res) => {
      callback(err)
    })
}
