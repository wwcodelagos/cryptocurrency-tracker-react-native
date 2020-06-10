import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailsScreen({navigation}) {
    return (
      <View style={styles.container}>
        {/* <Button
        title=""
        onPress={() => navigation.navigate('Home')}
      /> */}
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