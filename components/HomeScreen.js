import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Card} from 'react-native-elements'
import CardComponent from './Card';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
      <Card containerStyle={styles.card} title='Total Value' titleStyle={{marginTop: 20, color: '#fff', fontWeight: 'normal', fontSize: 14}} dividerStyle={{backgroundColor: 'pink' }}>
      <Text style={{borderRadius: 0, marginLeft: 110, fontSize: 28, marginTop: 0, color: '#fff', fontWeight: 'bold' }}>$ 524.00</Text>
      </Card>
      <View>
      <Text style={styles.listHeader}>List of Coins</Text>
      </View>
  
      <CardComponent />
      
        
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
      backgroundColor: '#F9F8F9',
    },
    card: {
      justifyContent: 'flex-start',
      color: '#ffffff',
        width: '90%',
        height: 150,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: 'pink',
        borderRadius: 5,
        borderWidth: 1,
        shadowColor: '#000',
        shadowRadius: 6.5,
        elevation: 12,
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 0,
          height:6,
        }
      },
      listHeader: {
        marginLeft: 150,
        marginTop: 20
      }
  });