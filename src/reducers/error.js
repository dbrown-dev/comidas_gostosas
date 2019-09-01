import { SHOW_ERROR } from '../actions'

const initialState = {}

const error = (state = initialState, action) => {
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
