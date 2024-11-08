import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import styles from '../components/styles';

const CocktailDetailsPage = ({ route }) => {
    const { cocktail } = route.params;
  
    if (!cocktail) {
      return (
        <View style={styles.detailsContainer}>
          <Text style={styles.errorText}>Failed to load cocktail details.</Text>
        </View>
      );
    }
  
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.detailsContainer}>
          <ScrollView>
            <View style={styles.detailsContentContainer}>
              <Image
                source={{ uri: `${cocktail.strDrinkThumb}` }}
                style={styles.detailsImage}
                resizeMode="contain"
              />
              <Text style={styles.detailsTitle}>{cocktail.strDrink}</Text>
              <Text style={styles.detailsSubtitle}>Category: </Text>
              <Text style={styles.detailsText}>{cocktail.strCategory}</Text>
              <Text style={styles.detailsSubtitle}>Type: </Text>
              <Text style={styles.detailsText}>{cocktail.strAlcoholic}</Text>
              <Text style={styles.detailsSubtitle}>Glass: </Text>
              <Text style={styles.detailsText}>{cocktail.strGlass}</Text>
              <Text style={styles.detailsSubtitle}>Instructions:</Text>
              <Text style={styles.detailsText}>{cocktail.strInstructions}</Text>
              <Text style={styles.detailsSubtitle}>Ingredients:</Text>
              {Object.keys(cocktail)
                .filter((key) => key.startsWith('strIngredient') && cocktail[key])
                .map((key, index) => (
                  <View key={index} style={styles.ingredientContainer}>
                    <Image
                      source={{ uri: `https://www.thecocktaildb.com/images/ingredients/${cocktail[key]}-Medium.png` }}
                      style={styles.ingredientImage}
                      resizeMode="contain"
                    />
                    <Text style={styles.ingredientText}>{cocktail[key]}</Text>
                  </View>
                ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      
    );
  };

export default CocktailDetailsPage;