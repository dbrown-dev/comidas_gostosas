import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import ListRecipes from './ListRecipes'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  photoBanner: {
    background: 'url(/images/banner.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '350px'
  },
  recipeCard: {
    maxWidth: 345
  },
  cardMedia: {
    height: 140
  }
})

export default props => {
  const classes = useStyles(props)
  const { recipes } = props
  return (
    <>
      <Header />
      <Container maxWidth="false" className={classes.photoBanner} />
      {recipes && <ListRecipes classes={classes} recipes={recipes} />}
    </>
  )
}
