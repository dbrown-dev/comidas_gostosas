import React from 'react'

import { TextField, MenuItem } from '@material-ui/core'

const SelectInput = ({
  field,
  form: { touched, errors, handleChange },
  options,
  ...props
}) => (
  <TextField
    select
    handleChange={handleChange(field.name)}
    error={touched[field.name] && errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    {...field}
    {...props}
  >
    {options.map(value => (
      <MenuItem key={value.id} value={value.id}>
        {value[field.name]}
      </MenuItem>
    ))}
  </TextField>
)

export default SelectInput
