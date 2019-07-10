import React from 'react'

import { TextField } from '@material-ui/core'

const TextFieldInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
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