import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { clearCart, calculateTotal } from "../redux/cartReducers";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { creerCommande, sendCommandeClient } from "../api/axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import ItemCartCard from "../Components/ItemCartCard";
import Inputs from "../Components/Inputs";
import { useState } from "react";

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSupps = useSelector((state) => state.cart.cartSupps);
  const totalPrice = useSelector((state) => state.cart.total);
  const scannedData = useSelector((state) => state.scan.data ? state.scan.data.slice(9, 10) : []);
 


  // elimination des valeurs undefinie
  const filteredCartItems = cartItems.filter((item) => item.id !== undefined);

  // elimination des valeurs undefinie
  const filteredCartSupps = cartSupps.filter((item) => item.id !== undefined);

  const [tip, setTip] = useState("");
  const handleTipChange = (value) => {
    setTip(value);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  const ItemsArray = filteredCartItems.flatMap((item) =>
    Array.from({ length: item.quantity }, () => item.id)
  );
  const SuppsArray = filteredCartSupps.flatMap((item) =>
    Array.from({ length: item.quantity }, () => item.id)
  );

  //sauvegarde des informations (panier) et envois vers base de données

  const handleConfirm = async () => {
    const comidString = await AsyncStorage.getItem("comid");
    const comid = JSON.parse(comidString);
    const userID = await AsyncStorage.getItem("userID");
    const userId = JSON.parse(userID);



    try {
      //envoi d'objet vers table commande
      const commandeInfo = {
        date: new Date().toISOString(),
        statut: "en_attente",
        t: {
          tableID: scannedData,
        },
        totalAddition: totalPrice,
        totalTip: tip ? tip : 0,
      };
  //envoi d'objet vers table commande client
      const commandeData = {
        commande: {
          comid: comid + 1,
        },
        addition: totalPrice,
        items: ItemsArray,
        supps: SuppsArray,
        tip:tip ? tip : 0,
        utilisateur: {
          userID: userId,
        },
      };

      console.log(commandeInfo)

      const response = await creerCommande(commandeInfo);
      const responseClient = await sendCommandeClient(commandeData);
      return responseClient.data, response.data,  Alert.alert(
        'servimi',
        'Votre commande est envoyé avec succés et en attente',
        [{ text: 'ok' }]
      )
       ,
       // vider panier aprés commande envoyé vers base du données
       handleClearCart()
       ,navigation.navigate("Home");
    } catch (error) {
      console.error("handling problem: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#FB7803" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}> Votre Panier </Text>
        <TouchableOpacity        >
          <Ionicons name="clipboard-outline" color="#FB7803" size={24} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 10,
        }}
      >
        <Text style={{ margin: 10, fontFamily: "Cairo", fontSize: 24 }}>
          Total actuel
        </Text>
        <Text style={{ fontFamily: "Cairo", fontSize: 24, margin: 10 }}>
          {totalPrice} DT
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <Inputs
          value={tip}
          changeValue={handleTipChange}
          placeholder="pour boire "
        />
      </View>
      <View style={{ height: "50%" }}>
        <FlatList
          style={{ height: "100%" }}
          data={cartItems}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={({ item }) => <ItemCartCard item={item} />}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ margin: 10, width: "100%" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              handleClearCart();
            }}
          >
            <Text style={styles.btnText}>Vider Commande</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              handleConfirm();
            }}
          >
            <Text style={styles.btnText}>Passer Commande</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerText: {
    fontFamily: "Cairo",
    fontSize: 24,
  },
  name: {
    fontFamily: "Cairo",
    fontSize: 16,
    marginBottom: 8,
  },
  total: {
    margin: "10%",
    fontFamily: "Cairo",
    fontSize: 23,
  },
  price: {
    fontFamily: "Cairo",
    fontSize: 16,
    marginBottom: 8,
  },
  quantity: {
    fontFamily: "Cairo",
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsContainer: {
    alignSelf: "center",
    width: "100%",
    margin: 40,
    position: "absolute",
    bottom: 0,
  },
  btn: {
    backgroundColor: "#FB8703",
    height: "45%",
    width: "96%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Cairo",
    color: "white",
    fontSize: 16,
  },
});

export default Cart;