import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import RecipeList from './recipeList/RecipeList'
import RecipeDisplay from './recipeDetails/RecipeDisplay'
import AddRecipe from './addRecipeForm/AddRecipe'
import { theme } from '../style/muiStyles'
import Header from './Header'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header displayFilter={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <RecipeList {...routeProps} />}
          />
          <Route
            exact
            path="/add"
            render={routeProps => <AddRecipe {...routeProps} />}
          />
          <Route
            path="/:id"
            render={routeProps => <RecipeDisplay {...routeProps} />}
          />
          {/* <Route component={Error404} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default connect()(App)
