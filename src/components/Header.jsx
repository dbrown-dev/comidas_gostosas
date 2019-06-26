import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">
            Comidas Gostosas
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
