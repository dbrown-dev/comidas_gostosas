import React from 'react'

import Header from './Header'
import ListRecipes from './ListRecipes'
import { useStyles } from '../style/muiStyles'


const Home = props => {
  const { recipes, cookTime, onFilterChange, categories, seasons } = props
  const classes = useStyles(props)
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
      {recipes && <ListRecipes classes={classes} />}
    </>
  )
}

export default Home