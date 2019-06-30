import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import { getRecipeDetail } from './util/api'
import RecipeDetails from './RecipeDetails'

const useStyles = makeStyles(theme => ({
  photoBanner: {
    background: 'url(/images/banner.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '250px'
  },
  appTitle: {
    fontFamily: 'Chewy',
    position: 'relative',
    fontSize: '8rem',
    textAlign: 'center',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF'
  },
  recipePhoto: {
    width: 400,
    height: 400,
    objectFit: "cover",
    borderRadius: 5
  },
  recipePaper: {
    padding: "20px 30px",
    marginBottom: 30
  },
  greyRecipeBox: {
    backgroundColor: "#F5F4F4",
    padding: 10
  }
}))

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
