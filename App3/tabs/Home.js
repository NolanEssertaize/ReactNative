import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, FlatList, ActivityIndicator } from 'react-native';
import CocktailCard from '../components/CocktailsCard'

import styles from '../components/styles';

import CocktailService from '../services/CocktailService'

// Home Page
const HomePage = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchCocktailData = useCallback(async () => {
      try {
        setLoading(true);
        const cocktailData = await Promise.all([
          CocktailService.fetchCocktail('margarita'),
          CocktailService.fetchCocktail('mojito'),
          CocktailService.fetchCocktail('negroni'),
          CocktailService.fetchCocktail('martini'),
          CocktailService.fetchCocktail('mauresque'),
          CocktailService.fetchCocktail('gin-tonic'),
        ]);
        const cocktailList = cocktailData.flatMap((data) => data.drinks || []);
        setCocktails(cocktailList);
        console.log(cocktailList)
      } catch (error) {
        console.log(error)
        setError('Error fetching cocktail data');
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      fetchCocktailData();
    }, [fetchCocktailData]);
  
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <FlatList
            data={cocktails}
            keyExtractor={(item) => item?.idDrink || ''}
            renderItem={({ item }) => (
              <CocktailCard
                cocktail={item}
                onPress={() => navigation.navigate('CocktailDetails', { cocktail: item })}
              />
            )}
            contentContainerStyle={styles.cocktailList}
          />
        )}
      </View>
    );
  };

export default HomePage;