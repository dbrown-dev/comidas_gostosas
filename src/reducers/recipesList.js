import { ADD_RECIPES } from '../actions/recipesList'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return [action.recipes]
    default:
      return state
  }
}

export default reducer
