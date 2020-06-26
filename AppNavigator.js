
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Your Coins',
            headerStyle: {
            backgroundColor: '#ee4266',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          }}} />
          <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Bitcoin',
            headerStyle: {
            backgroundColor: '#ee4266',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          } }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;