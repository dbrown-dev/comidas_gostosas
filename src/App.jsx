import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import {
  getRecipesSummary,
  getCookTimes,
  getCategories,
  getSeasons
} from './components/util/api'
import Home from './components/Home'

export default class App extends Component {
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
    getRecipesSummary().then(recipes =>
      getCookTimes().then(cookTime =>
        getCategories().then(categories =>
          getSeasons().then(seasons => {
            this.setState({ recipes, cookTime, categories, seasons })
          })
        )
      )
    )
  }

  componentDidMount() {
    this.getInitialDisplayData()
  }

  render() {
    const { recipes, cookTime, seasons, categories } = this.state
    return (
      <Router>
        <CssBaseline />
        <Switch>
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
                {...routeProps}
              />
            )}
          />
          {/* <Route path="/:id" component={RecipeDetails} />
            <Route component={Error404} /> */}
        </Switch>
      </Router>
    )
  }
}
