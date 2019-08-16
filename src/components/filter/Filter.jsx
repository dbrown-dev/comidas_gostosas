import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import T from 'prop-types'

import MultiSelect from './MultiSelect'
import {
  updateRecipesList,
  getRecipesList,
  getCookTimesList,
  getSeasonsList,
  getCategoriesList
} from '../../actions'

const Filter = ({
  classes,
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
          classes={classes}
          options={categories.data}
          selectedOptions={filter.selectedCategories}
          isLoaded={categories.isLoaded}
          handleChange={handleFilterChange}
        />
        <MultiSelect
          name="seasons"
          label="Seasons"
          classes={classes}
          options={seasons.data}
          selectedOptions={filter.selectedSeasons}
          isLoaded={seasons.isLoaded}
          handleChange={handleFilterChange}
        />
        <MultiSelect
          name="time"
          label="Time"
          classes={classes}
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
  classes: T.object,
  filter: T.object.isRequired,
  categories: T.exact({
    isLoaded: T.bool,
    data: T.arrayOf(T.object)
  }).isRequired,
  cookTimes: T.exact({
    isLoaded: T.bool,
    data: T.arrayOf(T.object)
  }).isRequired,
  seasons: T.exact({
    isLoaded: T.bool,
    data: T.arrayOf(T.object)
  }).isRequired,
  updateRecipesList: T.func.isRequired,
  getRecipesList: T.func.isRequired,
  getCookTimesList: T.func.isRequired,
  getSeasonsList: T.func.isRequired,
  getCategoriesList: T.func.isRequired
}
