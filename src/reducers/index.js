import { combineReducers } from 'redux'

import recipesList from './recipesList'
import error from './error'
import isLoading from './loading'
import filter from './filter'
import seasons from './seasons'
import categories from './categories'
import cookTimes from './cookTimes'

export default combineReducers({
  error,
  isLoading,
  recipesList,
  filter,
  seasons,
  categories,
  cookTimes
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