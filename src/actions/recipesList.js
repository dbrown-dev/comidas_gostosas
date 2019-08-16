import { getRecipesSummary } from '../utilities/api'
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
    return getRecipesSummary()
      .then(recipesList => {
        if (filter) {
          const filteredRecipes = recipesList.filter(
            recipe =>
              (filter.selectedSeasons.length === 0 ||
                filter.selectedSeasons.includes(recipe.season)) &&
              (filter.selectedTimes.length === 0 ||
                filter.selectedTimes.includes(recipe.timeOptions)) &&
              (filter.selectedCategories.length === 0 ||
                filter.selectedCategories.every(category =>
                  recipe.cuisineCategories.includes(category)
                ))
          )
          dispatch(receiveRecipes(filteredRecipes))
        } else {
          dispatch(receiveRecipes(recipesList))
        }
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
