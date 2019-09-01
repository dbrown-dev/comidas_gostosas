import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  }
})

const ValueContainer = ({ classes, children }) => <div className={classes.valueContainer}>{children}</div>

export default withStyles(styles)(ValueContainer)

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
}
