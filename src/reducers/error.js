import {SHOW_ERROR} from '../actions/recipesList'

function error (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        isError: true,
        message: action.errorMessage
      }

    default:
      return state
  }
}

export default error
