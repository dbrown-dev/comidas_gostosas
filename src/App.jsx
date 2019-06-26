import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { getRecipesSummary } from './components/util/api'
import Home from './components/Home'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  displayAllRecipes = recipes => {
    this.setState({ recipes })
  }

  componentDidMount() {
    getRecipesSummary(this.displayAllRecipes)
  }

  render() {
    const { recipes } = this.state
    return (
      <Router>
        <CssBaseline />
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => <Home recipes={recipes} {...routeProps} />}
            />
            {/* <Route path="/:id" component={RecipeDetails} />
            <Route component={Error404} /> */}
          </Switch>
      </Router>
    )
  }
}
