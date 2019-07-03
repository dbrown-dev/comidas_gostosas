import {SHOW_ERROR} from '../actions/recipesList'

const initialState = ''

function error (state = initialState, action) {
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
