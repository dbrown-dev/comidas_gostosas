import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import AddRecipe from './addRecipeForm/AddRecipe'
import { theme } from '../style/muiStyles'
import Header from './Header'
import AutoSelect from './form-components/AutoSelect'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* <Header displayFilter={true} /> */}
        <Switch>
          <Route
            exact
            path="/test"
            render={routeProps => (
              <div style={{
                width: 300
              }}>
                <AutoSelect
                  isMulti
                  name="test"
                  label="test"
                  placeholder="Chose a Dog"
                />
              </div>
            )}
          />
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
            render={routeProps => <Recipe {...routeProps} />}
          />
          {/* <Route component={Error404} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default connect()(App)
