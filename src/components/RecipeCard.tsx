// src/components/RecipeCard.tsx
import type { Recipe } from "../types/recipe.ts";
import "../styles/RecipeCard.css";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>

      {recipe.description && <p className="recipe-desc">{recipe.description}</p>}

      <h4>Ingredientes:</h4>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h4>Instrucciones:</h4>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </article>
  );
}

