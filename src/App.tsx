import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail.tsx";
import "./styles/Home.css";
//import RecipePage from "./pages/RecipePage";
import Menu from "./components/menu";
import "./styles/menu.css";


function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
