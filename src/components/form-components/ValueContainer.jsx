import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  }
}))

export const ValueContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.valueContainer}>{children}</div>
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node
}
