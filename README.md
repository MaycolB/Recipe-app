# 🍲 App_Recetas

Aplicación web para **gestionar recetas de cocina**. Permite listar, ver, crear, editar y eliminar recetas, todo desarrollado con **React + TypeScript + Vite**.
Este proyecto forma parte de mi portafolio para practicar y mostrar habilidades en desarrollo frontend.

---

## 📖 Características

* 📌 Listado de recetas con título, imagen y categoría
* 🔍 Vista detallada de cada receta con ingredientes y pasos
* ➕ Formulario para crear nuevas recetas
* ✏️ Edición de recetas existentes
* ❌ Eliminación de recetas
* 💾 Persistencia en **LocalStorage**
* 🎨 Estilos responsive y amigables

---

## 🚀 Instalación y uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/TU-USUARIO/App_Recetas.git
   cd App_Recetas
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador:

   ```
   http://localhost:5173
   ```

---

## 🖼️ Screenshots

*(Próximamente añadir capturas del Home y de una receta en detalle)*

---

## 🛠️ Tecnologías utilizadas

* ⚛️ [React](https://reactjs.org/)
* ⌨️ [TypeScript](https://www.typescriptlang.org/)
* ⚡ [Vite](https://vitejs.dev/)
* 🎨 CSS / TailwindCSS (opcional)

---

## 📌 Próximas mejoras

* 🔎 Búsqueda de recetas por título o categoría
* ⭐ Favoritos
* 🗂️ Filtros por categoría
* 📱 Mejor experiencia mobile

---

## 👤 Autor

Desarrollado por **Maycol Bustamante**.
📌 [LinkedIn](#) | 📌 [GitHub](https://github.com/MaycolB)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
