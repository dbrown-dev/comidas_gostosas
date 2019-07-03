import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { getRecipeDetail } from '../utilities/api'
import RecipeDetails from './RecipeDetails'
import { useStyles } from '../style/muiStyles'


const RecipeDisplay = props => {
  const {
    match: {
      params: { id }
    }
  } = props

  const classes = useStyles(props)
  const [recipe, setRecipe] = useState()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const recipeData = await getRecipeDetail(id)
        setRecipe(recipeData)
      } catch {
        setIsError(true)
      }
    }
    getRecipe()
  }, [id])

  return (
    <>
      <Header classes={classes} />
      {recipe && !isError && <RecipeDetails recipe={recipe} classes={classes} />}
    </>
  )
}

export default RecipeDisplay

RecipeDisplay.propTypes = {
  match: PropTypes.object
}
