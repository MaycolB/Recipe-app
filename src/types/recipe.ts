// src/types/recipe.ts
export interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  description?: string;    // opcional: texto corto
  ingredients: string[];
  steps: string[];         // array de pasos (coincide con recipes.json)
}
