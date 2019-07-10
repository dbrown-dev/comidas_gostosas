import { RECEIVE_RECIPES } from '../actions/recipesList'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return {
        isLoaded: true,
        data: action.recipes
      }
    default:
      return state
  }
}

export default reducer
