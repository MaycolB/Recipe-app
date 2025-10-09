import { useState } from "react";
import recipesData from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard";
import "../styles/Home.css";
import "../styles/menu.css";

function Home() {
  const [search, setSearch] =useState("");
  // filtramos las recetas segun la busqueda
  const filteredRecipes = recipesData.filter((recipe) =>
  recipe.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <h2>Listado de recetas 🍳</h2>

      <input
        type="text"
        placeholder="Buscar receta..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        />

        <div className="recipe-container">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No se encontraron recetas.</p>
          )}
        </div>

      <footer>
        <p className="center"> © 2025 MaycolB </p>
        <img src="./imagenes/logo.png" alt="Logo" className="footer-logo" />
        
      </footer>
      
    </div>
    
  );
}



export default Home;
