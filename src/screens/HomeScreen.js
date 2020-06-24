import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, Text, ScrollView } from 'react-native';
import { Card} from 'react-native-elements'
import CardComponent from '../components/Card';
import getRequest from '../../lib/request';


export default function HomeScreen({navigation}) {
  const [currencies, setCurrencies] = useState([])
  const goToDetails = () => {
    navigation.navigate('Details');
  }
  useEffect(() => {
    const getApi = async () => {
      setCurrencies(await getRequest());
    }
    getApi();
  }, [setCurrencies])
    
  return (
    <View style={styles.container}>
      <ScrollView>
    <Card containerStyle={styles.card} title='Total Value' titleStyle={{marginTop: 20, color: '#fff', fontWeight: 'normal', fontSize: 14}} dividerStyle={{backgroundColor: 'pink' }}>
    <Text style={{borderRadius: 0, marginLeft: 110, fontSize: 28, marginTop: 0, color: '#fff', fontWeight: 'bold' }}>$ 524.00</Text>
    </Card>
    <View>
    <Text style={styles.listHeader}>List of Coins</Text>
      {currencies && currencies.map((currency, index) => {
        return  <CardComponent onPress={goToDetails} key={index} currency={currency}/>
      })}
    </View>
    <Button
      title="Go to Details Screen"
      onPress={() => navigation.navigate('Details')}
    />
    </ScrollView>
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