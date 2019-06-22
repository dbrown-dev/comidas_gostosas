import React from 'react'

export default class RecipeDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getRecipe = id => {
    return fetch(`/api/recipes/${id}`)
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        this.setState({ recipe: jsonResponse })
      })
  }

  componentDidMount() {
    this.getRecipe(this.props.match.params.id)
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
            <p>{recipe.time_options}</p>
            {recipe.cuisine_categories.map(cat => (
              <span> {cat} </span>
            ))}
          </div>
          <div>
            <h2>Ingredients:</h2>
            {recipe.ingredients.map(ingredient => (
              <p>
                {' '}
                {ingredient.quantity} {ingredient.measurement_name} of{' '}
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
