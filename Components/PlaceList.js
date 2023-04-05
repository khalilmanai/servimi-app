import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import PlaceCard from "./PlaceCard";
import { getEtablissement } from "../api/axios";

const PlaceList = () => {
  const [etablissement, setEtablissement] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getEtablissement()
      .then((data) => {
        setEtablissement(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{ marginTop: "50%", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#FB8703" />
        </View>
      ) : (
        <View>
          <FlatList
            data={etablissement}
            keyExtractor={(item) => item.etabId.toString()}
            renderItem={({ item }) => <PlaceCard key={item.etabId} place={item} />}
          />
        </View>
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
