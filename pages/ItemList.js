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
import { addSupp } from "../redux/suppsReducer";

const ItemList = () => {
  const scannedData = useSelector((state) => state.scan.data).slice(2, 3);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  async function fetchCategories() {
    try {
      setLoading(true);
      const data = await getCategorie(scannedData);
   

      data[0].menuItems.forEach((item) => {
        dispatch(addItem(item));
      });

      data[0].menuSupplements.forEach((item) => {
        dispatch(addSupp(item));
      });
    } catch (error) {
    throw  new Error(error)
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
  const supps = useSelector((state) => state.supp);

  return (
    <View style={styles.container}>
      <UserPanel headerText="Votre liste des" secondText="Aliments" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FB8703" />
        </View>
      ) : (
        <View>
          <FlatList
            data={items}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => <ItemCard item={item} />}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
          <Text> Supplments </Text>
          <FlatList
            data={supps}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => <ItemCard item={item} />}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        </View>
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
