import { combineReducers } from 'redux'

import recipesList from './recipesList'
import error from './error'
import isLoading from './loading'
import filter from './filter'

export default combineReducers({
  error,
  isLoading,
  recipesList,
  filter
})

// const initialState = {
//   error: { isError: false, message: '' },
//   recipesList: [],
//   cookTimes: [],
//   categories: [],
//   seasons: [],
//   measurements: [],
//   ingredients: [],
//   currentRecipe: {},
//   filter: { selectedSeasons: [], selectedTimes: [], selectedCategories: [] }
// }