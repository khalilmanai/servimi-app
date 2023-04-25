import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import PlaceCard from "./PlaceCard";
import { getEtablissement } from "../api/axios";

const PlaceList = () => {
  const [etablissement, setEtablissement] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);
    try {
      const data = await getEtablissement();
      setEtablissement(data);
    } catch (error) {
     throw new Error(error)
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center", marginBottom:'50%' }}>
          <ActivityIndicator size="large" color="#FB8703" />
        </View>
      ) : (
        <FlatList
          data={etablissement}
          keyExtractor={(item) => item.etabId.toString()}
          renderItem={({ item }) => (
            <PlaceCard key={item.etabId} place={item} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshList} />
          }
        />
      )}
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
