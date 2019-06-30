import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'

import ListRecipes from './ListRecipes'

const useStyles = makeStyles(theme => ({
  photoBanner: {
    background: 'url(/images/banner.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '350px'
  },
  appTitle: {
    fontFamily: 'Chewy',
    position: 'relative',
    fontSize: '9rem',
    textAlign: 'center',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
  },
  formControl: {
    margin: 10,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  white: {
    color: '#FFF'
  },
  recipeList: {
    marginTop: 40
  },
  recipeCard: {
    maxWidth: 345
  },
  cardMedia: {
    height: 140
  },
  cardTitle: {
    minHeight: 80
  }
}))

const Home = props => {
  const classes = useStyles(props)
  const { recipes, cookTime, onFilterChange, categories, seasons } = props
  return (
    <>
      <Header
        classes={classes}
        onFilterChange={onFilterChange}
        categories={categories}
        seasons={seasons}
        cookTime={cookTime}
        displayFilter={true}
      />
      {recipes && <ListRecipes classes={classes} recipes={recipes} />}
    </>
  )
}

export default Home