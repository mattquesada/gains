import { createApolloFetch } from 'apollo-fetch';
import * as queries from '../queries/apolloQueries';

// TODO - Import this from somewhere else
const graphqlURI = 'http://localhost:4000/graphql';

const fetch = createApolloFetch({
  uri: graphqlURI
});

export const getRecipes = async (dish, ingredients) => {
  if (dish && ingredients) {
    let queryResult = await fetch({
      query: queries.fetchRecipesWithBoth,
      variables: {
        dish,
        ingredients
      }
    });
    return queryResult;
  }

  if (dish) {
    let queryResult = await fetch({
      query: queries.fetchRecipesWithDish,
      variables: {
        dish,
        ingredients
      }
    });
    return queryResult;
  }

  if (ingredients) {
    let queryResult = await fetch({
      query: queries.fetchRecipesWithDish,
      variables: {
        dish,
        ingredients
      }
    });
    return queryResult;
  }
  
  return null;
}