import { getRecipeDetail } from '../utilities/api'
import { showError } from './'

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'

export const receiveRecipe = recipe => {
  return {
    type: RECEIVE_RECIPE,
    recipe: recipe
  }
}

export const requestRecipe = () => {
  return {
    type: REQUEST_RECIPE
  }
}

export const getRecipeDetails = id => {
  return dispatch => {
    dispatch(requestRecipe())
    return getRecipeDetail(id)
      .then(recipeDetails => {
        dispatch(receiveRecipe(recipeDetails))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
