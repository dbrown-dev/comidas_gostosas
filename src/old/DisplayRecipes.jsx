import React from 'react'
import { Link } from 'react-router-dom'

import { getRecipesSummary } from '../components/util/api'

export default class DisplayRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showAllRecipes = (recipes) => {
    this.setState({recipes})
  }

  componentDidMount() {
    getRecipesSummary(this.showAllRecipes)
  }

  render() {
    if (this.state.recipes) {
      return (
        <div>
          <h1>Comida Gostosa</h1>
          {this.state.recipes.map(recipe => {
            return (
              <div>
                <Link to={`/recipe/${recipe.id}`}><h2>{recipe.title}</h2></Link>
                <p>{recipe.season}</p>
                <p>{recipe.rating}</p>
                <p>{recipe.timeOptions}</p>
                {recipe.cuisineCategories.map(cat => (
                  <span> {cat} </span>
                ))}
              </div>
            )
          })}
        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

