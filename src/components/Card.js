import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { getCoinIconUri } from '../../lib/constants';

export default function CardComponent({currency, onPress}) {
  const {symbol, name, priceUsd, changePercent24Hr, volumeUsd24Hr, } = currency;
    return (
      <TouchableOpacity onPress={onPress}>
      <Card containerStyle={styles.card}>
        <View style={styles.subContainer}>
            <Image
              style={styles.image}
              source={{ uri: getCoinIconUri(name) }}
            />
          <View style={styles.firstContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
          <View style={styles.middleContainer}>
            <Text>$ {parseFloat(priceUsd).toFixed(2)}</Text>
          </View>
          <View style={styles.lastContainer}>
            <Text>$ {parseFloat(volumeUsd24Hr).toFixed(0)}</Text>
            { changePercent24Hr > 0 ?
              <Text style={styles.changeUp}>{parseFloat(changePercent24Hr).toFixed(2)} %</Text>
            : <Text style={styles.changeDown}>{parseFloat(changePercent24Hr).toFixed(2)} %</Text>
            }
            </View>
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
      },
      subContainer: {flexDirection: 'row'},
      firstContainer: {
        flexDirection: 'column',
        alignItems: "flex-start",
        width: 120,
      },
      middleContainer: {
        flexDirection: 'column',
        width: 80,
        alignItems: 'center'
      },
      lastContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 100
      },
      symbol: {
        fontSize: 10,
        color: 'grey'
      },
      name: {
        fontWeight: 'bold'
      },
      changeUp: {
        color: '#849324'
      },
      changeDown: {
        color: '#ee4266'
      }
  });
