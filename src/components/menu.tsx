import '../styles/menu.css';



function Menu() {
    return (
        <nav className="menu">
            <a className="nav-link active" aria-current="page" href="../App.tsx">Home</a>
            <a className="nav-link" href="./pages/RecipeList.tsx">Lista de recetas</a>
            <a className="nav-link" href="./pages/AddRecipe.tsx">Agregar receta</a>
            <a className="nav-link" href="./pages/RecipeDetail.tsx">Ver receta</a>
            <a className="nav-link" href="./pages/Contact.tsx">Contacto</a>
            <a className="nav-link" href="./pages/About.tsx">Acerca de</a>
            <a className="nav-link disabled" aria-disabled="true"></a>
        </nav>
    );
}

export default Menu;