import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Card} from 'react-native-elements'
import CardComponent from '../components/Card';
import getRequest from '../../lib/request';

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

export default class HomeScreen extends React.Component {
  componentDidMount() {
    getRequest().then(data => console.log(data))
  }

  goToDetails = () => {
    navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
      <Card containerStyle={styles.card} title='Total Value' titleStyle={{marginTop: 20, color: '#fff', fontWeight: 'normal', fontSize: 14}} dividerStyle={{backgroundColor: 'pink' }}>
      <Text style={{borderRadius: 0, marginLeft: 110, fontSize: 28, marginTop: 0, color: '#fff', fontWeight: 'bold' }}>$ 524.00</Text>
      </Card>
      <View>
      <Text style={styles.listHeader}>List of Coins</Text>
        {currencies.map((currency, index) => {
          return  <CardComponent onPress={goToDetails} key={index} currency={currency}/>
        })}
      </View>
        
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }
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