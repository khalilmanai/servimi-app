import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View , SafeAreaView } from "react-native";
import { getCommandesServeur } from "../api/axios";

const renderItem = ({ item }) => (
  <View>
    <Text>Table Id: {item.tableId}</Text>
    <Text>Com Id: {item.comid}</Text>
    <Text>Menu Items: {item.menuItems.join(", ")}</Text>
    <Text>Supp Items: {item.suppItems.join(", ")}</Text>
  </View>
);

const WaiterHome = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const commandesResponse = await getCommandesServeur();
        setCommandes(commandesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommandes();
  }, []);

  const commandesExist = commandes.length > 0;

  const data = commandesExist
    ? commandes.map((commande) => ({
        tableId: commande.tableId,
        comid: commande.comid,
        menuItems: commande.items,
        suppItems: commande.supps,
      }))
    : [];

  return (
   <SafeAreaView style={styles.container}>
     <View style={{ flex: 1  }}>
      {commandesExist ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.comid}
        />
      ) : (
       <View style={{flex: 1 , alignItems:'center' , justifyContent:'center'}}>
         <Text>No commandes found.</Text>
       </View>
      )}
    </View>
   </SafeAreaView>
  );
};

export default WaiterHome;


const styles = StyleSheet.create({
  container: {
    flex:1 , 
    alignItems:'center'
  }
})