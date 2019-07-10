import React from 'react'

import Header from '../Header'
import ListRecipes from './ListRecipes'
import { useStyles } from '../../style/muiStyles'


const Home = props => {
  const classes = useStyles(props)
  return (
    <>
      <Header
        classes={classes}
        displayFilter={true}
      />
      <ListRecipes classes={classes} />
    </>
  )
}

export default Home