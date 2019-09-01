import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  }
}))

export const Menu = ({ children, innerProps }) => {
  const classes = useStyles()
  return (
    <Paper square className={classes.paper} {...innerProps}>
      {children}
    </Paper>
  )
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired
}
