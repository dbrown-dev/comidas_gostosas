import { REQUEST_RECIPES, RECEIVE_RECIPES, SHOW_ERROR } from '../actions/recipesList'

const loading = (state = false, action) => {
  console.log(action.type)
  switch (action.type) {
    case REQUEST_RECIPES:
      return true

    case RECEIVE_RECIPES:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default loading
