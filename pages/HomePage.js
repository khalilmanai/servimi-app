import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar } from "@rneui/base";

import UserPanel from "../Components/UserPanel";

import PlaceList from "../Components/PlaceList";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

 /*  const handleSearch = (text) => {
    const newData = etablissement.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    }); 

    setQuery(text);
    setFilteredData(newData);
  };*/

  return (
    <View style={styles.container}>
      <View style={{ height: 160, margin: "2%" }}>
        <UserPanel headerText='Bienvenue dans' secondText='Servimi'/>
      </View>
      <View style={{ margin: "2%" }}>
        <SearchBar
          platform="default"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          round
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
          <PlaceList
            key="place-list"
          
          />
        </View>
      </View>
    </View>
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
