import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { getRecipesSummary, getCookTimes } from './components/util/api'
import Home from './components/Home'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFilterChange = query => {
    getRecipesSummary(recipes => {
      console.log(query)
      console.log(recipes)
      this.setState({
        recipes: recipes.filter(
          recipe => {
            (query.season.length === 0 || recipe.season.some(season => query.season.includes(season))) &&
              (query.time.length === 0 || recipe.time.some(time => query.season.includes(time))) &&
              (query.category.length === 0 || recipe.category.some(category => query.category.includes(category)))
          }
        )
      })
    })
  }

  displayAllRecipes = recipes => {
    this.setState({ recipes })
  }

  displayCookTime = cookTime => {
    this.setState({ cookTime })
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.checked
    const name = target.name;
    this.setState({ [name]: value })
  }

  componentDidMount() {
    getRecipesSummary(this.displayAllRecipes)
    getCookTimes(this.displayCookTime)
  }

  render() {
    const { recipes, cookTime, handleFilterChange } = this.state
    return (
      <Router>
        <CssBaseline />
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <Home recipes={recipes} onFilterChange={this.onFilterChange} cookTime={cookTime} handleFilterChange={this.handleFilterChange} {...routeProps} />}
          />
          {/* <Route path="/:id" component={RecipeDetails} />
            <Route component={Error404} /> */}
        </Switch>
      </Router>
    )
  }
}
