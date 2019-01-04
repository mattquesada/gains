// Apollo queries to fetch data from graphQL

export const fetchRecipesWithDish = `
  query RecipesWithDish($dish: String!) {
    Recipes(dish: $dish) {
      name
      recipeURL
      ingredients
    }
  }
`;

export const fetchRecipesWithIngredients = `
  query RecipesWithIngredients($ingredients: [String]!) {
    Recipes(ingredients: $ingredients) {
      name
      recipeURL
      ingredients
    }
  }
`;

// aggregation of the above two queries
export const fetchRecipesWithBoth = `
  query RecipesWithBoth($dish: String!, $ingredients: [String]!) {
    Recipes(dish: $dish, ingredients: $ingredients) {
      name
      recipeURL
      ingredients
    }
  }
`;