import React from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'

import Filter from './Filter'

const Header = ({ classes, cookTime, onFilterChange, categories, seasons }) => {
  return (
    <>
      <Container maxWidth={false} className={classes.photoBanner}>
        <Typography className={classes.appTitle}>Comida Gostosa</Typography>
      </Container>
      <AppBar position="static">
        <Toolbar>
          <Filter
            classes={classes}
            onFilterChange={onFilterChange}
            categories={categories}
            seasons={seasons}
            cookTime={cookTime}
          />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
