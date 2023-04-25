import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCommandClient, getItemById, getSuppsById } from "../api/axios";

const CommandeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const comid = route.params.command.comid;

  const [commandeClient, setCommandeClient] = useState([]);
  const [commandeItems, setCommandeItems] = useState([]);
  const [commandeSupps, setCommandeSupps] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCommandeClient = async () => {
      try {
        const data = await getCommandClient(comid);
        setCommandeClient(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCommandeClient();
  }, [comid]);

  const itemsId = useMemo(() => commandeClient.flatMap((obj) => obj.items), [
    commandeClient,
  ]);
  const suppId = useMemo(() => commandeClient.flatMap((obj) => obj.supps), [
    commandeClient,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemData, suppData] = await Promise.all([
          itemsId.length > 0
            ? Promise.all(itemsId.map((itemId) => getItemById(itemId)))
            : [],
          suppId.length > 0
            ? Promise.all(suppId.map((suppId) => getSuppsById(suppId)))
            : [],
        ]);
        setCommandeItems(itemData);
        setCommandeSupps(suppData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [itemsId, suppId]);

  console.log(commandeItems , commandeSupps)
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>CommandeScreen</Text>
      <FlatList
        data={commandeItems}
        keyExtractor={(item, index) => String(item.id) + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNom}>{item.nom}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrix}>{item.prix} DT</Text>
          </View>
        )}
      />
      <Text> Supplements</Text>
      <FlatList
        data={commandeSupps}
        keyExtractor={(supp, index) => String(supp.id) + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNom}>{item.nom}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrix}>{item.prix} DT</Text>
          </View>
        )}
      />
    </View>
  );
};
export default CommandeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemNom: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
