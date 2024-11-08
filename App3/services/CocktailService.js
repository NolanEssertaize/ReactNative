// Cocktail Service

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailService = {
    async fetchCocktail(cocktailName) {
      try {
        const response = await fetch(`${BASE_URL}${cocktailName}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching cocktail:', error);
        throw error;
      }
    },
  };
  
export default CocktailService;