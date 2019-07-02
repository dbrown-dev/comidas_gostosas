import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import {
  getRecipesSummary,
  getCookTimes,
  getCategories,
  getSeasons
} from '../utilities/api'
import Home from './Home'
import RecipeDisplay from './RecipeDisplay'
import AddRecipe from './AddRecipe'
import Contact from './Test'
import { theme } from '../utilities/muiStyles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFilterChange = query => {
    getRecipesSummary().then(recipes => {
      this.setState({
        recipes: recipes.filter(
          recipe =>
            (query.seasonState.length === 0 ||
              query.seasonState.includes(recipe.season)) &&
            (query.timeState.length === 0 ||
              query.timeState.includes(recipe.timeOptions)) &&
            (query.categoryState.length === 0 ||
              query.categoryState.every(category =>
                recipe.cuisineCategories.includes(category)
              ))
        )
      })
    })
  }

  getInitialDisplayData = () => {
    Promise.all([
      getRecipesSummary(),
      getCookTimes(),
      getCategories(),
      getSeasons()
    ]).then(responses => {
      const keys = ['recipes', 'cookTime', 'categories', 'seasons']
      this.setState(
        responses.reduce(
          (obj, response, i) => ({ ...obj, [keys[i]]: response }),
          {}
        )
      )
    })
  }

  componentDidMount() {
    this.getInitialDisplayData()
  }

  render() {
    const { recipes, cookTime, seasons, categories } = this.state
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route
              exact
              path="/test"
              render={routeProps => (
                <Contact
                  recipes={recipes}
                  onFilterChange={this.onFilterChange}
                  seasons={seasons}
                  categories={categories}
                  cookTime={cookTime}
                  displayFilter={true}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={routeProps => (
                <Home
                  recipes={recipes}
                  onFilterChange={this.onFilterChange}
                  seasons={seasons}
                  categories={categories}
                  cookTime={cookTime}
                  displayFilter={true}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/add"
              render={routeProps => (
                <AddRecipe displayFilter={false} {...routeProps} />
              )}
            />
            <Route
              path="/:id"
              render={routeProps => (
                <RecipeDisplay displayFilter={false} {...routeProps} />
              )}
            />
            {/* <Route component={Error404} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default connect()(App)