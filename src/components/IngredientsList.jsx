

export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })

  return (
     <section className="ingredients-list">
        <h2>Ingredients on hand:</h2>
        <ul>{ingredientsListItems}</ul>

        {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
              <h3>Ready for recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
        </div>}

      </section>
  )
}