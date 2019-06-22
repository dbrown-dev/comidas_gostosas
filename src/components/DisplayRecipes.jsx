import React from 'react'
import { Link } from 'react-router-dom'

export default class DisplayRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getAllRecipes = () => {
    return fetch('/api/recipes')
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        this.setState({ recipes: jsonResponse })
      })
  }

  componentDidMount() {
    this.getAllRecipes()
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
                <p>{recipe.time_options}</p>
                {recipe.cuisine_categories.map(cat => (
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

