import React, {  useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar } from "@rneui/base";

import UserPanel from "../Components/UserPanel";
import DealsCarousel from "../Components/DealsCarousel";
import PlaceList from "../Components/PlaceList";


const HomePage = () => {
  const [value, setValue] = useState("");


  return (
    <View style={styles.container}>
   <View
   style={{height:100}}><UserPanel /></View>
    <FlatList
  contentContainerStyle={styles.contentContainer}
  ListHeaderComponent={
    <View key="search-container" style={styles.searchContainer}>
      <SearchBar
        platform="default"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        round
        lightTheme
        onChangeText={setValue}
        placeholder="Recherche"
        placeholderTextColor="white"
        value={value}
        key="search-bar"
      />
      <View>
        <Text style={styles.placeTitle}>Offres du jour</Text>
      </View>
      <DealsCarousel key="deals-carousel" />
    
    </View>
  }
  data={[]}
  renderItem={({ item }) => null}
  ListFooterComponent={
    <View key="place-container" style={styles.placeContainer}>
      <Text key="place-title" style={styles.placeTitle}>Découvrir</Text>
    <View style={{width:'100%'}}>
    <PlaceList key="place-list" />
    </View>
    </View>
  }
/>

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
     margin:'2%',
     alignSelf:'flex-start'
  },
});
