
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Your Coins' }}/>
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Bitcoin' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;