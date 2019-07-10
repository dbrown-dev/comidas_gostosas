import React from 'react'

import {
  FormControl,
  MenuItem,
  Select,
  Input,
  ListItemText,
  Checkbox,
  InputLabel
} from '@material-ui/core'

const MultiSelectInput = ({
  field,
  form: { touched, errors, handleChange, values },
  options,
  optionName,
  label,
  ...props
}) => (
  <FormControl>
    <InputLabel htmlFor={field.name}>{label}</InputLabel>
    <Select
      multiple
      input={<Input id={field.name} />}
      handleChange={handleChange(field.name)}
      renderValue={selected => selected.join(', ')}
      error={touched[field.name] && errors[field.name]}
      helperText={touched[field.name] && errors[field.name]}
      {...field}
      {...props}
    >
      {options.map(option => (
        <MenuItem key={option.id} value={option[optionName]}>
          <Checkbox
            checked={values[field.name].indexOf(option[optionName]) > -1}
          />
          <ListItemText primary={option[optionName]} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default MultiSelectInput
