import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DisplayRecipes from './components/DisplayRecipes'
import RecipeDetails from './components/RecipeDetails'
import Error404 from './components/Error404'
import AddRecipe from './components/AddRecipe'
import ModifyRecipe from './components/ModifyRecipe'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={DisplayRecipes} />
          <Route path="/mod" exact component={ModifyRecipe} />
          <Route path="/add" exact component={AddRecipe} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
