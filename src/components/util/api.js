import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/'

export const getRecipesSummary = callback => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'recipes').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getRecipeDetail = (recipeId, callback) => {
  request.get(apiUrl + 'recipes/' + recipeId).end((err, res) => {
    callback(res.body)
  })
}

export const getCookTimes = callback => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'cooktimes').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getSeasons = callback => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'seasons').end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export const getCategories = callback => {
  return new Promise((resolve, reject) => {
    request.get(apiUrl + 'categories').end((error, res) => {
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
