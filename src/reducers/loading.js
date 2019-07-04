import { REQUEST_RECIPES, RECEIVE_RECIPES, SHOW_ERROR } from '../actions/recipesList'
import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../actions/recipeDetails'
import { REQUEST_SEASONS, RECEIVE_SEASONS } from '../actions/seasons'
import { REQUEST_COOKTIMES, RECEIVE_COOKTIMES } from '../actions/cookTimes'
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/categories'


const initialState = true

const loading = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPE:
      return true

    case RECEIVE_RECIPE:
      return false

    case REQUEST_RECIPES:
      return true

    case RECEIVE_RECIPES:
      return false

    case REQUEST_SEASONS:
      return true

    case RECEIVE_SEASONS:
      return false

    case REQUEST_COOKTIMES:
      return true

    case RECEIVE_COOKTIMES:
      return false

    case REQUEST_CATEGORIES:
      return true

    case RECEIVE_CATEGORIES:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default loading
