import {
  RECEIVE_INGREDIENTS
} from '../actions/ingredients'

const initialState = {}

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INGREDIENTS:
      return {
        isLoaded: true,
        data: action.ingredients
      }
    default:
      return state
  }
}

export default ingredients
