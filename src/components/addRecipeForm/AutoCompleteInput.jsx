import React from 'react'
import deburr from 'lodash/deburr'
import Autosuggest from 'react-autosuggest'
import { TextField, MenuItem, Paper } from '@material-ui/core'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import _ from 'lodash'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  divider: {
    height: theme.spacing(2)
  }
}))

const renderInputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node)
          inputRef(node)
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  )
}

const AutoCompleteInput = ({
  field,
  form: { touched, errors, values, setFieldValue },
  suggestions,
  label,
  placeholder,
  propRef,
  ...props
}) => {
  const classes = useStyles()

  const [stateSuggestions, setSuggestions] = React.useState([])

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, suggestions, propRef))
  }

  const handleSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const handleChange = name => (e, { newValue }) => {
    setFieldValue(name, newValue)
  }

  function getSuggestionValue(suggestion) {
    return suggestion[propRef]
  }

  const getSuggestions = (value, suggestions, propRef) => {
    const inputValue = deburr(value.trim()).toLowerCase()
    const inputLength = inputValue.length
    let count = 0

    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 7 && suggestion[propRef].toLowerCase().includes(inputValue)

          if (keep) {
            count += 1
          }

          return keep
        })
  }

  const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion[propRef], query)
    const parts = parse(suggestion[propRef], matches)

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map(part => (
            <span
              key={part.text}
              style={{ fontWeight: part.highlight ? 500 : 400 }}
            >
              {part.text}
            </span>
          ))}
        </div>
      </MenuItem>
    )
  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion
  }

  return (
    <Autosuggest
      {...autosuggestProps}
      inputProps={{
        classes,
        name: field.name,
        label,
        placeholder,
        value: _.get(values, field.name),
        onChange: handleChange(field.name),
        error: touched[field.name] && errors[field.name],
        helperText: touched[field.name] && errors[field.name]
      }}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderSuggestionsContainer={options => (
        <Paper {...options.containerProps} square>
          {options.children}
        </Paper>
      )}
    />
  )
}

export default AutoCompleteInput
