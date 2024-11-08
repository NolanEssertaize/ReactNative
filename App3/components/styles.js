import { StyleSheet } from 'react-native';

const THUMBNAIL_SIZE = 100;
const LARGE_IMAGE_SIZE = 350;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    cocktailList: {
      width: '100%',
      alignItems: 'center',
    },
    cocktailCardContainer: {
      width: '100%',
      alignItems: 'center',
    },
    cocktailCard: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cocktailImage: {
      width: THUMBNAIL_SIZE,
      height: THUMBNAIL_SIZE,
      marginRight: 16,
      borderRadius: 12,
    },
    cocktailInfo: {
      flex: 1,
    },
    cocktailName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cocktailCategory: {
      fontSize: 14,
      color: '#666',
    },
    detailsContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    detailsImage: {
      width: '100%',
      height: LARGE_IMAGE_SIZE,
      marginRight: 16,
      borderRadius: 12,
    },
    detailsTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: "center"
    },
    detailsSubtitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: "left"
    },
    detailsText: {
      fontSize: 20,
      marginBottom: 15,
      textAlign: "center"
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
    },
    ingredientContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    ingredientImage: {
      width: LARGE_IMAGE_SIZE / 6,
      height: LARGE_IMAGE_SIZE / 6,
      marginRight: 8,
    },
    ingredientText: {
      fontSize: 16,
    },
  });

  export default styles;