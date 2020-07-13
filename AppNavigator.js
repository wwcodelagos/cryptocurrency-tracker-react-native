
import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <SafeAreaView style={styles.safeArea}>
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
            title: '',
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
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#F9F8F9',
    },
  });
  
  export default AppNavigator;