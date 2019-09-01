import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import { addValidationSchema } from '../../utilities/yup'
import {
  getCookTimesList,
  getSeasonsList,
  getCategoriesList,
  getIngredientsList,
  getMeasurementsList
} from '../../actions'
import AddRecipeForm from './AddRecipeForm'
import { postRecipe } from '../../utilities/api'
import Loading from '../Loading'

const initialValues = {
  title: '',
  season: '',
  image: '/images/good.png',
  cookTime: '',
  cuisineCategories: [],
  instructions: [
    {
      instruction: '',
      image: '/images/food.png'
    }
  ],
  ingredients: [
    {
      ingredient: '',
      quantity: '',
      ingredientGroup: '',
      measurement: ''
    }
  ]
}

const handleSubmit = values => {
  console.log(values)
  postRecipe(values)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 500)
}

const AddRecipe = ({ dispatch, isLoaded }) => {
  useEffect(() => {
    dispatch(getIngredientsList())
    dispatch(getMeasurementsList())
    dispatch(getCategoriesList())
    dispatch(getSeasonsList())
    dispatch(getCookTimesList())
  }, [dispatch])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addValidationSchema}
      onSubmit={handleSubmit}
    >
      {renderProps =>
        isLoaded ? <AddRecipeForm {...renderProps} /> : <Loading />
      }
    </Formik>
  )
}

const mapStateToProps = ({
  ingredients,
  measurements,
  categories,
  cookTimes,
  seasons
}) => {
  return {
    isLoaded:
      ingredients.isLoaded &&
      measurements.isLoaded &&
      categories.isLoaded &&
      cookTimes.isLoaded &&
      seasons.isLoaded
  }
}

export default connect(mapStateToProps)(AddRecipe)

AddRecipe.propTypes = {
  dispatch: PropTypes.func,
  isLoaded: PropTypes.bool
}
