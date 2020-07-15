import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { getHistoryData } from "../../lib/request";
import moment from "moment";

import { VictoryArea, VictoryChart, VictoryTheme } from "victory-native";

export default function DetailsScreen({ route, navigation }) {
  const { id, name, supply, changePercent24Hr, priceUsd } = route.params;
  const price = `$ ${parseInt(priceUsd).toFixed(2)}`;
  const change = `$ ${parseInt(changePercent24Hr).toFixed(3)}`;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistoryApi = async () => {
      setHistory(await getHistoryData(id));
    };
    getHistoryApi();
  }, [setHistory]);

  const last7dayHistory = history.reverse().splice(0, 7).reverse();
  const composeChart = () => {
    const chartData = [];
    last7dayHistory.map((each) => {
      const date = new Date(each.date).toISOString().split("T")[0];
      const stringDate = moment(date).format("Do MMM");
      const priceUsd = `$ ${parseInt(each.priceUsd).toFixed(0)}`;
      return chartData.push({ date: stringDate, price: priceUsd });
    });
    return chartData;
  };
  const date = new Date();
  const formatDate = moment(date).format("MMMM YYYY");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{name}</Text>
          <View style={styles.details}>
            <Text style={styles.detailText}>{price}</Text>
            <Text style={styles.ButtonChange}>{change}</Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.chartHeader}>Weekly</Text>
          <VictoryChart width={430} theme={VictoryTheme.material}>
            <VictoryArea
              style={{ data: { fill: "#ee4266" } }}
              data={composeChart()}
              x="date"
              y="price"
            />
          </VictoryChart>
          <Text style={styles.chartFooter}>{formatDate}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#ee4266",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    paddingTop: 0,
  },
  bodyContainer: {
    flexDirection: "column",
    marginLeft: 3,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 0,
    justifyContent:"center",
    alignItems:"center"
  },
  chartHeader: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 0,
    fontSize: 28,
    marginTop: 30,
  },
  chartFooter: {
    color: "#000000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 0,
  },
  detailText: {
    display: "flex",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  ButtonChange: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10 ,
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    opacity:2,
    width:100
  },
  details:{
    flex: 1,
    padding: 24,
    alignItems: "center"
  }
});
