import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import RecipeDetails from './RecipeDetails'
import { connect } from 'react-redux'

import { getRecipeDetails } from '../actions/recipeDetails'
import Loading from './Loading'

const Recipe = ({
  dispatch,
  recipeDetails,
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    dispatch(getRecipeDetails(id))
  }, [dispatch, id])

  return (
    <>
      {recipeDetails.isLoaded ? (
        <RecipeDetails recipe={recipeDetails.data} />
      ) : (
        <Loading />
      )}
    </>
  )
}

const mapStateToProps = ({ recipeDetails }) => {
  return {
    recipeDetails
  }
}

export default connect(mapStateToProps)(Recipe)

Recipe.propTypes = {
  dispatch: PropTypes.func,
  recipeDetails: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}
