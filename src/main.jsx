import React from "react"
import {getRecipeFromMistral} from "/ai.js"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"

export default function Main() {

const [ingredients, setIngredients] = React.useState([])



  const [recipe, setRecipe] = React.useState("")

 async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

function addIngredient(formData) {
  const newIngredient = formData.get("ingredient")
  setIngredients(ingredients => [...ingredients, newIngredient])
}

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input 
        type="text" 
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientsList 
      ingredients={ingredients} 
      getRecipe={getRecipe}
      />} 

      {recipe && <ClaudeRecipe recipe={recipe}/>}

    </main>
  )
}