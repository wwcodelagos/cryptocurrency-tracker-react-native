import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
          <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',

    },
  });