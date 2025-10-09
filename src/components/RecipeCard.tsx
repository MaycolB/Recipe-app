// src/components/RecipeCard.tsx
import { Link } from "react-router-dom";
import type { Recipe } from "../types/recipe.ts";
import "../styles/RecipeCard.css";

interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.category}</p>
    </Link>
  );
}

export default RecipeCard;

