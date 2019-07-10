import { RECEIVE_RECIPE, REQUEST_RECIPE } from '../actions/recipeDetails'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return {
        ...state,
        isLoaded: false
      }
    case RECEIVE_RECIPE:
      return {
        isLoaded: true,
        data: action.recipe
      }
    default:
      return state
  }
}

export default reducer
