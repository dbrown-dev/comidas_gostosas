import { makeAPICall } from '../utilities/api'
import { showError } from './'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const REQUEST_RECIPES = 'REQUEST_RECIPES'

export const receiveRecipes = recipes => {
  return {
    type: RECEIVE_RECIPES,
    recipes: recipes
  }
}

export const requestRecipes = () => {
  return {
    type: REQUEST_RECIPES
  }
}

export const getRecipesList = filter => {
  return dispatch => {
    dispatch(requestRecipes())
    return makeAPICall('recipes')
      .then(({ body }) => {
        if (filter) {
          const filteredRecipes = body.filter(
            recipe =>
              (filter.selectedSeasons.length === 0 ||
                filter.selectedSeasons.includes(recipe.season)) &&
              (filter.selectedTimes.length === 0 ||
                filter.selectedTimes.includes(recipe.cookTime)) &&
              (filter.selectedCategories.length === 0 ||
                filter.selectedCategories.every(category =>
                  recipe.cuisineCategories.includes(category)
                ))
          )
          dispatch(receiveRecipes(filteredRecipes))
        } else {
          dispatch(receiveRecipes(body))
        }
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
