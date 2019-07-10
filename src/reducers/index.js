import { combineReducers } from 'redux'

import recipesList from './recipesList'
import error from './error'
import isLoading from './loading'
import filter from './filter'
import seasons from './seasons'
import categories from './categories'
import cookTimes from './cookTimes'
import recipeDetails from './recipeDetails'
import ingredients from './ingredients'
import measurements from './measurements'

export default combineReducers({
  error,
  isLoading,
  recipesList,
  filter,
  seasons,
  categories,
  cookTimes,
  recipeDetails,
  ingredients,
  measurements
})