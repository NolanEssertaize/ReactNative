import styles from '../components/styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';


// Cocktail Card Component
const CocktailCard = ({ cocktail, onPress }) => {
  if (!cocktail) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.cocktailCardContainer} onPress={onPress}>
      <View style={styles.cocktailCard}>
        <Image
          source={{ uri: `${cocktail.strDrinkThumb}/preview` }}
          style={styles.cocktailImage}
          resizeMode="contain"
        />
        <View style={styles.cocktailInfo}>
          <Text style={styles.cocktailName}>{cocktail.strDrink}</Text>
          <Text style={styles.cocktailCategory}>{cocktail.strCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CocktailCard;