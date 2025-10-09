import { useParams } from "react-router-dom";
import recipes from "../data/recipes.json";
import "../styles/RecipeDetail.css";

function RecipeDetail() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id.toString() === id);

    if (!recipe) {
        return <p> Receta no encontrada </p>
    }

    return (
        <div className="recipe-detail">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p className="description">{recipe.description}</p>

            <h3>Ingredientes</h3>
            <ul>
                {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                ))}
            </ul>

            <h3>Pasos </h3>
            <ol>
                {recipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeDetail;
