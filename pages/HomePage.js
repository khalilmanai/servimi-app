import React, { useEffect, useState } from "react";
import { SearchBar } from "@rneui/base";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { getEtablissement } from "../api/axios";

import UserPanel from "../Components/UserPanel";
import PlaceCard from "../Components/PlaceCard";

const HomePage = () => {
  const [etablissement, setEtablissement] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    refreshList();
  }, []);
 
  const refreshList = async () => {
    setRefreshing(true);
    try {
      const data = await getEtablissement();
      setEtablissement(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  const filterData = () => {
    return etablissement.filter((item) =>
      item.nom.toLowerCase().includes(query.toLowerCase())
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={styles.container}
    >
      <View style={{ height: 100, margin: "2%" }}>
        <UserPanel headerText="Bienvenue dans" secondText="Servimi" />
      </View>
      <View style={{ margin: "2%" }}>
        <SearchBar
          platform="default"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          round
          onChangeText={updateQuery}
          lightTheme
          value={query}
          placeholder="Recherche"
          placeholderTextColor="white"
          key="search-bar"
        />
      </View>
      <View key="place-container" style={styles.placeContainer}>
        <Text key="place-title" style={styles.placeTitle}>
          Découvrir
        </Text>
        <View style={{ width: "100%", height: "100%" }}>
          {isLoading ? (
            <View
              style={{ flex: 1, justifyContent: "center", marginBottom: "50%" }}
            >
              <ActivityIndicator size="large" color="#FB8703" />
            </View>
          ) : (
            <FlatList
              data={filterData()}
              keyExtractor={(item) => item.etabId.toString()}
              renderItem={({ item }) => (
                <PlaceCard key={item.etabId} place={item} />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={refreshList}
                />
              }
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchBarContainer: {
    width: "100%",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "#D3D3D3",
  },
  searchBarInput: {},
  placeContainer: {
    margin: 10,
  },
  placeTitle: {
    fontFamily: "Cairo",
    fontSize: 24,
    margin: "2%",
    alignSelf: "flex-start",
  },
});
