import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommandeScreen = ({ route }) => {
  const { command } = route.params;
  const item = command.itemsResponseData

  console.log(item)
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.nom}</Text>
        <Text style={styles.cardText}>{item.description}</Text>
   
        <Text style={styles.cardText}>Price: {item.prix} DT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardInfo: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontFamily:'Cairo',
    fontSize: 16,
    marginBottom: 5,
  },
  cardText: {
    fontFamily:'Cairo',
    fontSize: 14,
    marginBottom: 5,
  },
  quantity: {
    fontSize: 20,
 fontFamily:'Cairo'
  },
});


export default CommandeScreen