import React, { useState } from 'react';

const RecipeShowcase = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs and pancetta.' },
    { id: 2, name: 'Chicken Tikka Masala', description: 'Indian spiced chicken curry in a creamy sauce.' },
    { id: 3, name: 'Sushi', description: 'Traditional Japanese sushi rolls with fresh fish and rice.' },
    { id: 4, name: 'Sushi', description: 'Traditional Japanese sushi rolls with fresh fish and rice.' },
    { id: 5, name: 'Sushi', description: 'Traditional Japanese sushi rolls with fresh fish and rice.' },
    { id: 6, name: 'Sushi', description: 'Traditional Japanese sushi rolls with fresh fish and rice.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-50 transition duration-200"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="mt-8 p-6 bg-blue-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{selectedRecipe.name}</h2>
          <p className="mt-2">{selectedRecipe.description}</p>
          <p className="mt-4">Instructions for this recipe will go here...</p>
        </div>
      )}
    </div>
  );
};

export default RecipeShowcase;
