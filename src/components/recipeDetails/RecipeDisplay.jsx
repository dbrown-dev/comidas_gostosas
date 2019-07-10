import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import RecipeDetails from './RecipeDetails'
import { useStyles } from '../../style/muiStyles'
import { CircularProgress } from '@material-ui/core'
import { connect } from 'react-redux'
import { getRecipeDetails } from '../../actions/recipeDetails'

const RecipeDisplay = ({ dispatch, recipe, ...props }) => {
  const classes = useStyles(props)
  const {
    match: {
      params: { id }
    }
  } = props

  useEffect(() => {
    dispatch(getRecipeDetails(id))
  }, [dispatch, id])

  return (
    <>
      <Header classes={classes} />
      {recipe.isLoaded ? (
        <RecipeDetails recipe={recipe.data} classes={classes} />
      ) : (
        <CircularProgress className={classes.progress} color="secondary" />
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    recipe: state.recipeDetails
  }
}

export default connect(mapStateToProps)(RecipeDisplay)

RecipeDisplay.propTypes = {
  dispatch: PropTypes.func,
  recipe: PropTypes.object,
  match: PropTypes.object
}
