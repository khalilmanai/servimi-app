import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCommandeById } from "../api/axios";
import { useSelector } from "react-redux";


const CommandeDetails = () => {
  const route = useRoute()
  const data = route.params
  console.log(data)
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [commandes, setCommande] = useState([]);
  const scannedData = useSelector((state) => state.scan.data ? state.scan.data.slice(9, 10) : []);
 



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
      <Text style={styles.cardText}>pour boire: {item.totalTip}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Text
          style={{
            fontFamily: "Cairo",
            fontSize: 24,
            borderWidth: 1,
            borderColor: "#FB8703",
            padding:10
          }}
        >
     Vos Commandes
        </Text>
      </View>
      <FlatList
        data={commandes}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchCommandes} />
        }
      />
    </SafeAreaView>
  );
};

export default CommandeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  card: {
    width: "90%",
    alignSelf: "center",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Cairo",
    color: "white",
    fontSize: 18,
  },
  disconnect: {
    margin: 10,
    height: 45,
    backgroundColor: "#FB8703",
    width: "90%",
    position: "absolute",
    bottom: "100%",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
  },
});
