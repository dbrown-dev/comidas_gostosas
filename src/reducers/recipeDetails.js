import { RECEIVE_RECIPE } from '../actions/recipeDetails'

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case RECEIVE_RECIPE:
      return action.recipe
    default:
      return state
  }
}

export default reducer
