import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  singleValue: {
    fontSize: theme.typography.fontSize
  }
}))

export const SingleValue = ({ innerProps, children }) => {
  const classes = useStyles()
  return (
    <Typography className={classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  )
}

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.any.isRequired
}
