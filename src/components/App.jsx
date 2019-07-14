import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import Home from './home/Home'
import RecipeDisplay from './recipeDetails/RecipeDisplay'
import AddRecipe from './addRecipeForm/AddRecipe'
import { theme } from '../style/muiStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Home
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

export default connect()(App)