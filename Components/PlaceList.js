import { StyleSheet, Text, View 
, FlatList, 
} from "react-native";
import React from "react";
import place from "../utils/Place";
import PlaceCard from "./PlaceCard";


const PlaceList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={place}
        keyExtractor={(index) => String(index)}
        renderItem={({ item }) => <PlaceCard place={item} />}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
     container : {
      flex:1,
     }
});
