import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import { getEtablissement } from "../api/axios";

const PlaceList = () => {
  const [etablissement, setEtablissement] = useState([]);

  useEffect(() => {
    getEtablissement().then((data) => {
      setEtablissement(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={etablissement}
        keyExtractor={(etablissement) => etablissement.etabId}
        renderItem={({ item }) => <PlaceCard key={item.id} place={item} />}
      />
      {console.log(etablissement)}
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
