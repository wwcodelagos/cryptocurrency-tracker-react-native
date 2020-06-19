import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

export default function CardComponent({currency, onPress}) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Card containerStyle={styles.card}>
          <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.image}
                source={{ uri: currency.avatar }}
              />
            <View style={{flexDirection: 'column', width: 100}}><Text>{currency.name}</Text><Text>{currency.symbol}</Text></View>
            <View style={{flexDirection: 'column', width: 100}}><Text>{currency.price}</Text></View>
            <View style={{flexDirection: 'column', width: 100, alignItems: 'flex-end'}}><Text>{currency.volumeUsd24Hr}</Text><Text>{currency.change}</Text></View>
          </View>
      </Card>
      </TouchableOpacity>
    )
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F8F9',
    },
    image: {height: 30, width: 30, marginRight: 10},
    card: {
      justifyContent: 'flex-start',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
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
      }
  });
  // export default withNavigation(CardComponent);

