import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'

const styles = theme => ({
  textField: {
    width: 500,
    margin: theme.spacing(1)
  }
})

const TextFieldInput = ({
  field,
  form: { touched, errors },
  classes,
  ...props
}) => (
  <TextField
    error={touched[field.name] && errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    classsName={classes.textField}
    {...field}
    {...props}
  />
)

export default withStyles(styles)(TextFieldInput)

TextFieldInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  classes: PropTypes.string
}
