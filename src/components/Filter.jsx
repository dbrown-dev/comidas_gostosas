import React from 'react'
import { Container, Grid } from '@material-ui/core'

import SeasonFilter from './SeasonFilter'
import TimeFilter from './TimeFilter'
import CategoryFilter from './CategoryFilter'

const Filter = ({ classes, cookTime, onFilterChange, seasons, categories }) => {
  const [seasonState, setSeason] = React.useState([])
  const [timeState, setTime] = React.useState([])
  const [categoryState, setCategory] = React.useState([])

  React.useEffect(() => {
    onFilterChange({ timeState, seasonState, categoryState })
  }, [timeState, seasonState, categoryState])

  const handleSeasonChange = event => {
    setSeason(event.target.value)
  }

  const handleTimeChange = event => {
    setTime(event.target.value)
  }

  const handleCategoryChange = event => {
    setCategory(event.target.value)
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <SeasonFilter
          classes={classes}
          seasons={seasons}
          seasonState={seasonState}
          handleSeasonChange={handleSeasonChange}
        />
        <TimeFilter
          classes={classes}
          cookTime={cookTime}
          timeState={timeState}
          handleTimeChange={handleTimeChange}
        />
        <CategoryFilter
          classes={classes}
          categories={categories}
          categoryState={categoryState}
          handleCategoryChange={handleCategoryChange}
        />
      </Grid>
    </Container>
  )
}

export default Filter