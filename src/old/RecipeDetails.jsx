import React from 'react'

import { getRecipeDetail } from '../components/util/api'

export default class RecipeDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  
  showRecipeDetail = recipe => {
    this.setState({recipe})
  }

  componentDidMount() {
    getRecipeDetail(this.props.match.params.id, this.showRecipeDetail)
  }

  render() {
    if (this.state.recipe) {
      const { recipe } = this.state
      return (
        <div>
          <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.title}</p>
            <p>{recipe.rating}</p>
            <p>{recipe.timeOptions}</p>
            {recipe.cuisineCategories.map(cat => (
              <span> {cat} </span>
            ))}
          </div>
          <div>
            <h2>Ingredients:</h2>
            {recipe.ingredients.map(ingredient => (
              <p>
                {' '}
                {ingredient.quantity} {ingredient.measurementName} of{' '}
                {ingredient.name}{' '}
              </p>
            ))}
          </div>
          <div>
            <h2>Instructions:</h2>
            {recipe.instructions.map(instruction => (
              <div>
                <img src={instruction.image}></img>
                <p>{instruction.instruction}</p>
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}
