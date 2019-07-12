import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const TextFieldInput = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <TextField
    error={touched[field.name] && errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    {...field}
    {...props}
  />
)

export default TextFieldInput

TextFieldInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
}
