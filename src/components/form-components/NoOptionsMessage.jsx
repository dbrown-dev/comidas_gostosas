import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  }
}))

export const NoOptionsMessage = ({ children, innerProps }) => {
  const classes = useStyles()
  return (
    <Typography
      color="textSecondary"
      className={classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object.isRequired
}
