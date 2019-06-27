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
            render={routeProps => <Home recipes={recipes} cookTime={cookTime} handleFilterChange={this.handleFilterChange} {...routeProps} />}
          />
          {/* <Route path="/:id" component={RecipeDetails} />
            <Route component={Error404} /> */}
        </Switch>
      </Router>
    )
  }
}
