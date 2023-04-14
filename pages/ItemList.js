import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard";
import UserPanel from "../Components/UserPanel";
import { getCategorie } from "../api/axios";
import { addItem } from "../redux/ItemReducer";

const ItemList = ({ route }) => {
  const place = route.params;

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  

  async function fetchCategories() {
    try {
      setLoading(true);
      const data = await getCategorie(place.etabId);
      data[0].menuItems.forEach((item) => {
        dispatch(addItem(item));
      });
    } catch (error) {
      console.log("problem fetching item list", error);
      // Display a user-friendly error message
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  function handleRefresh() {
    setRefreshing(true);
    fetchCategories().then(() => setRefreshing(false));
  }
  

  const items = useSelector((state) => state.item);
  console.log(items);
  return (
    <View style={styles.container}>
      <UserPanel headerText='Votre liste des' secondText='Aliments'/>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FB8703" />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => <ItemCard item={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      )}
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});