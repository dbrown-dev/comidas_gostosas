import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SeasonFilter from './SeasonFilter'
import TimeFilter from './TimeFilter'
import CategoryFilter from './CategoryFilter'

import { updateRecipesList } from '../../actions/filter'
import { getRecipesList } from '../../actions/recipesList'

const Filter = ({
  classes,
  cookTime,
  seasons,
  categories,
  dispatch,
  filter
}) => {


  const handleFilterChange = (e) => {
    dispatch(updateRecipesList(e.target.name, e.target.value))
    dispatch(getRecipesList(filter))
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <SeasonFilter
          classes={classes}
          seasons={seasons}
          handleSeasonChange={handleFilterChange}
        />
        <TimeFilter
          classes={classes}
          cookTime={cookTime}
          handleTimeChange={handleFilterChange}
        />
        <CategoryFilter
          classes={classes}
          categories={categories}
          handleCategoryChange={handleFilterChange}
        />
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(Filter)

Filter.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func,
  filter: PropTypes.object
}
