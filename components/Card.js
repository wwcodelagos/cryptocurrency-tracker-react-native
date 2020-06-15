import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { withNavigation } from 'react-navigation';


const currencies = [
    {
      id: 1,
       name: 'Bitcoin',
       symbol: 'BTC',
       avatar: 'https://static.coincap.io/assets/icons/btc@2x.png',
       price: '$ 9,2945.00',
       change: 0.08,
       volumeUsd24Hr: '$ 123,333,679'
    },
    {
      id: 2,
        name: 'Ethereum',
        symbol: 'ETC',
        avatar: 'https://static.coincap.io/assets/icons/etc@2x.png',
        price: '$ 2,2945.00',
        change: 0.05,
        volumeUsd24Hr: '$ 3,333,679'
     },
     {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      avatar: 'https://static.coincap.io/assets/icons/usdt@2x.png',
      price: '$ 9,2945.00',
      change: 0.08,
      volumeUsd24Hr: '$ 123,333,679'
   },
   {
    id: 4,
       name: 'XRP',
       symbol: 'XRP',
       avatar: 'https://static.coincap.io/assets/icons/xrp@2x.png',
       price: '$ 2,2945.00',
       change: 0.05,
       volumeUsd24Hr: '$ 3,333,679'
    },
    {
      id: 5,
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      avatar: 'https://static.coincap.io/assets/icons/bch@2x.png',
      price: '$ 9,2945.00',
      change: 0.08,
      volumeUsd24Hr: '$ 123,333,679'
   },
   {
    id: 6,
       name: 'Bitcoin SV',
       symbol: 'BSV',
       avatar: 'https://static.coincap.io/assets/icons/bsv@2x.png',
       price: '$ 2,2945.00',
       change: 0.05,
       volumeUsd24Hr: '$ 3,333,679'
    },
   ]
   export default function CardComponent({navigation}) {
    return (
    <View style={styles.container}>
      {
  currencies.map((currency, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => navigation.navigate('Details')}>
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
  )}
      </View>
    )};
  
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

