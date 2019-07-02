import { combineReducers } from 'redux'

import recipesList from './recipesList'

export default combineReducers({
  recipesList
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