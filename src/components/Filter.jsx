import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MultiSelect from './form-components/MultiSelect'
import {
  updateRecipesList,
  getRecipesList,
  getCookTimesList,
  getSeasonsList,
  getCategoriesList
} from '../actions'

const Filter = ({
  filter,
  categories,
  cookTimes,
  seasons,
  updateRecipesList,
  getRecipesList,
  getCookTimesList,
  getSeasonsList,
  getCategoriesList
}) => {
  const handleFilterChange = e => {
    updateRecipesList(e.target.name, e.target.value)
  }

  useEffect(() => {
    getCookTimesList()
    getSeasonsList()
    getCategoriesList()
    getRecipesList(filter)
  }, [filter, getCookTimesList, getCategoriesList, getSeasonsList])

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <MultiSelect
          name="category"
          label="Categories"
          options={categories.data}
          selectedOptions={filter.selectedCategories}
          isLoaded={categories.isLoaded}
          handleChange={handleFilterChange}
        />
        <MultiSelect
          name="season"
          label="Seasons"
          options={seasons.data}
          selectedOptions={filter.selectedSeasons}
          isLoaded={seasons.isLoaded}
          handleChange={handleFilterChange}
        />
        <MultiSelect
          name="time"
          label="Time"
          options={cookTimes.data}
          selectedOptions={filter.selectedTimes}
          isLoaded={cookTimes.isLoaded}
          handleChange={handleFilterChange}
        />
      </Grid>
    </Container>
  )
}

const mapStateToProps = ({ filter, categories, cookTimes, seasons }) => {
  return {
    filter,
    categories,
    cookTimes,
    seasons
  }
}

const mapDispatchToProps = {
  updateRecipesList,
  getRecipesList,
  getCookTimesList,
  getSeasonsList,
  getCategoriesList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

Filter.propTypes = {
  classes: PropTypes.object,
  filter: PropTypes.object.isRequired,
  categories: PropTypes.exact({
    isLoaded: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  cookTimes: PropTypes.exact({
    isLoaded: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  seasons: PropTypes.exact({
    isLoaded: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  updateRecipesList: PropTypes.func.isRequired,
  getRecipesList: PropTypes.func.isRequired,
  getCookTimesList: PropTypes.func.isRequired,
  getSeasonsList: PropTypes.func.isRequired,
  getCategoriesList: PropTypes.func.isRequired
}
