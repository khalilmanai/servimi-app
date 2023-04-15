import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { getCommandesServeur } from "../api/axios";

const WaiterHome = ({ navigation }) => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCommandPress = () => {
    navigation.navigate("CommandeScreen", { command: commandes });
  };
  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const commandesResponse = await getCommandesServeur();
        setCommandes(commandesResponse);
        setLoading(false);
      } catch (error) {
        console.error("couldnt fetch command list", error);
        setLoading(false);
      }
    };
    fetchCommandes();
  }, []);
  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCommandPress(item)}
    >
      <Text style={styles.cardTitle}>Commande: {item.comid}</Text>
      <Text style={styles.cardText}>Date: {item.date}</Text>
      <Text style={styles.cardText}>Statut: {item.statut}</Text>
      <Text style={styles.cardText}>Table:{item.t.tableID}</Text>
      <Text style={styles.cardText}>Addition: {item.totalAddition}</Text>
      <Text style={styles.cardText}>Tip: {item.totalTip}</Text>
    </TouchableOpacity>
  );
  console.log(commandes.itemsResponseData)

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={commandes.commandes}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.comid)}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Pas de commandes.</Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default WaiterHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
  loadingContainer : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }
});
