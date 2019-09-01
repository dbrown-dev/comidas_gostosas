import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16
  }
}))

export const Placeholder = ({ innerProps = {}, children }) => {
  const classes = useStyles()
  return (
    <Typography
      color="textSecondary"
      className={classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  )
}

Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object
}
