import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import RecipeDetails from './RecipeDetails'
import { useStyles } from '../../style/muiStyles'
import { connect } from 'react-redux';
import { getRecipeDetails } from '../../actions/recipeDetails'


const RecipeDisplay = (props) => {
  const { dispatch, isLoading, recipe } = props

  const classes = useStyles(props)
  const { match: { params: { id } } } = props
  
  useEffect(() => {
    dispatch(getRecipeDetails(id))
  }, [])

  return (
    <>
      <Header classes={classes} />
      {recipe.isLoaded && <RecipeDetails recipe={recipe.data} classes={classes} />}
    </>
  )
}

const mapStateToProps = state => {
  return {
    recipe: state.recipeDetails,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(RecipeDisplay)

RecipeDisplay.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  recipe: PropTypes.object,

}
