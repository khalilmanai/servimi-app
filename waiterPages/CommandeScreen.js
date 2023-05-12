import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import {  useRoute } from "@react-navigation/native";
import {
  getCommandClient,
  getItemById,
  getSuppsById,
} from "../api/axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeStatusCommande } from "../api/axios";
import Switch from "../Components/Switch";

const CommandeScreen = () => {
  const route = useRoute();
  const comid = route.params.command.comid;
   const status = route.params.command.statut
  const tableID = route.params.command.t.tableID
  const [commandeClient, setCommandeClient] = useState([]);
  const [commandeItems, setCommandeItems] = useState([]);
  const [commandeSupps, setCommandeSupps] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const fetchCommandeClient = async () => {
      try {
        const data = await getCommandClient(comid);
        setCommandeClient(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCommandeClient();
  }, [comid]);

  const itemsId = useMemo(
    () => commandeClient.flatMap((obj) => obj.items),
    [commandeClient]
  );
  const suppId = useMemo(
    () => commandeClient.flatMap((obj) => obj.supps),
    [commandeClient]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemData, suppData] = await Promise.all([
          itemsId.length > 0
            ? Promise.all(itemsId.map((itemId) => getItemById(itemId)))
            : [],
          suppId.length > 0
            ? Promise.all(suppId.map((suppId) => getSuppsById(suppId)))
            : [],
        ]);
        setCommandeItems(itemData);
        setCommandeSupps(suppData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [itemsId, suppId]);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headeText}>Menu Demandée</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Items</Text>
      </View>
      <FlatList
        data={commandeItems}
        keyExtractor={(item, index) => String(item.id) + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNom}>{item.nom}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrix}>{item.prix} DT</Text>
          </View>
        )}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Supplements</Text>
      </View>
      <FlatList
        data={commandeSupps}
        keyExtractor={(supp, index) => String(supp.id) + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNom}>{item.nom}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrix}>{item.prix} DT</Text>
          </View>
        )}
      />
       <View style={styles.tableControl}>
<Switch  tableID = {tableID}  />
</View>
      <View style={styles.buttonContainer}>
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const status = "en_cours";
            changeStatusCommande(comid, status);
          }}
        >
          <Text style={styles.buttonText}>Valider Commande</Text>
        </TouchableOpacity>
        <TouchableOpacity
       
          style={styles.button}
          onPress={() => {
            if(status==="en_attente"){
              Alert.alert(
                'servimi',
                "Veuiller vérifier la commande d'avance",
                [{ text: 'ok' }]
              );
            }else{
            const status = "paye";
            changeStatusCommande(comid, status);}
          }}
        >
          <Text style={styles.buttonText}> Finaliser Commande</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CommandeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemNom: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Cairo",
    fontSize: 16,
  },
  textContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#FB8703",
    alignItems: "center",
  },
  header: {
    marginTop:50,
    margin: 10,
    alignItems: "center",
  },
  headeText: {
    borderWidth: 1,
    padding:10,
    borderRadius:10,
    borderColor: "#FB8703",
    fontFamily: "Cairo",
    fontSize: 24,
  },
  button: {
    width: "98%",
    backgroundColor: "#FB8703",
    margin: 10,
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Cairo",
    fontSize: 16,
  },
  tableControl : {
    width:'90%',
    height:'10%',
    alignSelf:'center'
  
  }
});
