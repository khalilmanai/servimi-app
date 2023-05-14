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
import { disconnect, getData } from "../api/axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const WaiterHome = () => {
  const navigation = useNavigation();
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleCommandPress = (item) => {
    navigation.navigate("CommandeScreen", { command: item });
  };

  const fetchCommandes = async () => {
    try {
      const commandesResponse = await getData();
      setCommandes(commandesResponse);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error("couldn't fetch command list", error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCommandes();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCommandPress(item)}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.cardTitle}>Commande: {item.comid}</Text>
        <Text style={styles.cardTitle}>Table:{item.t.tableID}</Text>
      </View>
      <Text style={styles.cardText}>Date: {item.date}</Text>
      <Text style={styles.cardText}>Statut: {item.statut}</Text>

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
            borderBottomWidth: 1,
            borderBottomColor: "#FB8703",
          }}
        >
          Liste Des Commandes
        </Text>
      </View>
      <FlatList
        data={commandes}
        renderItem={(item) => renderItem(item)}
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
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          disconnect(navigation);
        }}
      >
        <View style={styles.disconnect}>
          <Ionicons name="power-outline" size={24} color="white" />
          <Text style={styles.text}>Quitter Session</Text>
        </View>
      </TouchableOpacity>
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
