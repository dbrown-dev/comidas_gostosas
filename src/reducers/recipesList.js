import { RECEIVE_RECIPES } from '../actions/recipesList'

const initialState = []

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes
    default:
      return state
  }
}

export default reducer
