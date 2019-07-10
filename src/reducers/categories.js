import {
  RECEIVE_CATEGORIES
} from '../actions/categories'

const initialState = {}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        isLoaded: true,
        data: action.categories
      }
    default:
      return state
  }
}

export default categories
