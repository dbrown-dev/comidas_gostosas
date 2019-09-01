import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
)

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ])
}

const styles = theme => ({
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto'
  }
})

const Control = ({
  children,
  innerProps,
  innerRef,
  classes,
  selectProps: { TextFieldProps }
}) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: classes.input,
        ref: innerRef,
        children,
        ...innerProps
      }
    }}
    {...TextFieldProps}
  />
)

export default withStyles(styles)(Control)

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.object.isRequired
}
