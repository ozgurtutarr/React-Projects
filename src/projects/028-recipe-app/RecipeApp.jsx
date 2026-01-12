import { useState } from 'react';
import './RecipeApp.css';

const RecipeApp = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Mock Data
  const mockRecipes = [
    {
      id: 1,
      title: 'Pasta Carbonara',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      ingredients: ['Pasta', 'Eggs', 'Bacon', 'Cheese'],
    },
    {
      id: 2,
      title: 'Chicken Curry',
      image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
      ingredients: ['Chicken', 'Curry Paste', 'Coconut Milk', 'Rice'],
    },
    {
      id: 3,
      title: 'Tomato Soup',
      image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
      ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Cream'],
    },
    {
      id: 4,
      title: 'Caesar Salad',
      image: 'https://cdn.dummyjson.com/recipe-images/4.webp',
      ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Dressing'],
    },
    {
      id: 5,
      title: 'Chocolate Cake',
      image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
      ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Eggs'],
    },
  ];

  const searchRecipes = (e) => {
    e.preventDefault();
    if (!query) {
      setRecipes([]);
      return;
    }
    const results = mockRecipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(query.toLowerCase())
        )
    );
    setRecipes(results);
  };

  return (
    <div className="recipe-container">
      <h2>Recipe App</h2>
      <form onSubmit={searchRecipes} className="search-bar">
        <input
          type="text"
          placeholder="Search recipes (e.g. Pasta, Chicken)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div
              className="recipe-img-placeholder"
              style={{
                backgroundImage: `url(${recipe.image})`,
                backgroundSize: 'cover',
                height: '150px',
              }}
            >
              {/* Using CSS background or img tag. Placeholder style if image fails */}
            </div>
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </div>
          </div>
        ))}
        {query && recipes.length === 0 && <p>No recipes found.</p>}
      </div>
    </div>
  );
};

export default RecipeApp;
