import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import Filter from './Filter'
import ListRecipes from './ListRecipes'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  photoBanner: {
    background: 'url(/images/banner.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '350px'
  },
  filter: {
    position: 'relative',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    background: theme.palette.primary.main,
    color: 'white',
    borderRadius: 10
  },
  formControl: {
    margin: 10,
    fullWidth: true,
    backgroundColor: '#FFF',
    display: 'flex',
    wrap: 'nowrap',
    borderRadius: 10
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

export default props => {
  const classes = useStyles(props)
  const { recipes, cookTime, handleFilterChange, onFilterChange } = props
  return (
    <>
      <Header />
      <Container maxWidth="false" className={classes.photoBanner} >
        {cookTime && <Filter classes={classes} handleFilterChange={handleFilterChange} onFilterChange={onFilterChange} cookTime={cookTime} />}
      </Container>
      {recipes && <ListRecipes classes={classes} recipes={recipes} />}
    </>
  )
}
