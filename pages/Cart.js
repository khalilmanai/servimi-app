import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  removeItemFromCart,
  clearCart,
  calculateTotal,
} from "../redux/cartReducers";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { creerCommande, sendCommandeClient } from "../api/axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSupps = useSelector((state) => state.cart.cartSupps);
  const totalPrice = useSelector((state) => state.cart.total);
  const scannedData = useSelector((state) => state.scan.data.slice(9, 10));

  // Removing undefined values from cartItems
  const filteredCartItems = cartItems.filter((item) => item.id !== undefined);

  // Removing undefined values from cartSupps
  const filteredCartSupps = cartSupps.filter((item) => item.id !== undefined);

  const handleRemoveFromCart = (product) => {
    dispatch(removeItemFromCart(product));
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

  const handleConfirm = async () => {
    const comidString = await AsyncStorage.getItem('comid');
    const comid = JSON.parse(comidString);
    const userID = await  AsyncStorage.getItem("userID");
  const userId = JSON.parse(userID);

    try {
      const commandeInfo = {
        date: new Date().toISOString(),
        statut: "en_attente",
        t: {
          tableID: scannedData,
        },
        totalAddition: totalPrice,
        totalTip: 120.0,
      };

      const commandeData = {
        commande: {
          comid: comid+1,
        },
        addition: totalPrice,
        items: ItemsArray,
        supps: SuppsArray,
        tip: 0,
        utilisateur: {
          userID: userId,
        },
      };
    

      const response = await creerCommande(commandeInfo);
      const responseClient = await sendCommandeClient(commandeData);
      console.log(responseClient);
      return (
    responseClient.data , response.data, navigation.navigate("Home")
      );
    } catch (error) {
      console.error("handling problem: ", error);
    }
  };

  const RenderItem = (props) => {
    const item = props.item;

    return (
      <View
        style={{
          margin: "2%",
          height: "15%",
          width: "95%",
          borderRadius: 10,
          backgroundColor: "#D3D3D3",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        index={props.index}
        
      >
        <View style={{ margin: "5%", height: "90%" }}>
          <Text style={styles.name}>{item.nom}</Text>
          <Text style={styles.name}>{item.description}</Text>
          <View
            style={{
              height: "29%",
              width: "100%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={styles.quantity}>x{item.quantity}</Text>
          </View>
        </View>
        <View
          style={{
            height: "90%",
            margin: "5%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
            <Ionicons name="close" size={19} color="#FB8703" />
          </TouchableOpacity>

          <Text style={styles.price}>{item.prix} DT</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {cartItems.map((item) => (
          <RenderItem key={item.id} item={item}  />
        ))}

        <View style={styles.buttonsContainer}>
          <View style={{ margin: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.total}>Total: </Text>
              <Text style={styles.total}>{totalPrice} DT</Text>
            </View>
            <Button
              color="#FB8703"
              title="Vider Commande"
              onPress={handleClearCart}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              color="#FB8703"
              title="Terminer Commande"
              onPress={() => {
                handleConfirm();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
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
    position: "absolute",
    bottom: 0,
  },
});

export default Cart;
