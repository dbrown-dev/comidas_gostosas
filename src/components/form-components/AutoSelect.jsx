import React from 'react'
import { map } from 'ramda'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useTheme } from '@material-ui/core/styles'

import {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
} from './index'

const options = [
  { id: 1, label: 'Chihuahua' },
  { id: 2, label: 'Bulldog' },
  { id: 3, label: 'Dachshund' },
  { id: 4, label: 'Akita' }
]

const formatOption = option => ({ ...option, value: option.id })

const formatOptionsWithValues = map(formatOption)

const AutoSelect = ({ isMulti, label, name, placeholder }) => {
  const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer
  }

  const theme = useTheme()

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.primary.main,
      '& input': {
        font: 'inherit'
      }
    })
  }

  return (
    <Select
      isMulti={isMulti}
      styles={selectStyles}
      placeholder={placeholder}
      options={formatOptionsWithValues(options)}
      components={components}
      TextFieldProps={{
        label: label,
        InputLabelProps: {
          htmlFor: name,
          shrink: true
        }
      }}
    />
  )
}

export default AutoSelect

AutoSelect.propTypes = {
  isMulti: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, label: PropTypes.node })
  ),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
