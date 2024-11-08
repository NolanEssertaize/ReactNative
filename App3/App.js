import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './tabs/Home'
import CocktailDetailsPage from './tabs/Details'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CocktailDetails" component={CocktailDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}