import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet , TouchableOpacity , Image, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addItemToCart ,addSuppToCart } from "../redux/cartReducers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

const ItemScreen = () => {
  const route = useRoute()
  const dispatch = useDispatch();
  const navigation = useNavigation()
const params = route.params
const {item} = params 
const addToCart = (item) => {
  dispatch(
    addItemToCart({
      id : item.itemId,
      nom : item.nom,
      img : item.image,
      description : item.description,
      prix : item.prix,
      quantity: quantity,
    })
  );
  dispatch(
    addSuppToCart({
      nom : item.nom,
      id : item.suppId,
      image : item.image,
      prix : item.prix,
      quantity: quantity,
    })
  );
};
//calcul du quantite commandeé par le client
  const [quantity, setQuantity] = useState(1);

  function Increment() {
    setQuantity((value) => value + 1);
  }
  function Decrement() {
    if (quantity > 1) {
      setQuantity((value) => value - 1);
    }
  }
  
  const base64Image = `data:image/png;base64,${item?.image}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="#FB8703" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: base64Image }} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.DetailsBox}>
          <View style={styles.textBox}>
            <Text style={styles.name}>{item?.nom}</Text>
            <Text style={styles.description}>{item?.description}</Text>
            <Text style={styles.price}>{item?.prix} DT</Text>
          </View>
          <View style={styles.buttonsBox}>
            <TouchableOpacity onPress={() => Increment()}>
              <Ionicons name="add-circle-outline" size={32} color="#FB8703" />
            </TouchableOpacity>
            <Text style={{ margin: "10%", fontFamily: "Cairo" }}>
              x{quantity}
            </Text>
            <TouchableOpacity onPress={() => Decrement()}>
              <Ionicons
                name="remove-circle-outline"
                size={32}
                color="#FB8703"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          addToCart(item),
          Alert.alert(
            'Element ajouté avec succès dans votre commande',
            '',
            [
              {
                text: 'Vérifier le panier',
                onPress: () => navigation.navigate('Cart'),
              },
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel',
              },
            ],
            { cancelable: false },
          );
        }}>
          <Text style={styles.buttonText}>Ajouter a votre commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginTop: "10%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "90%",
    borderRadius: 10,
    padding: "30%",
  },
  detailsContainer: {
    paddingHorizontal: "10%",
  },
  name: {
    fontFamily: "Cairo",
    fontSize: 32,
    marginVertical: "5%",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontFamily: "Cairo",
    fontSize: 20,
    color: "#FB8703",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#FB8703",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontFamily: "Cairo",
    color: "#fff",
    fontSize: 18,
  },
  DetailsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ItemScreen;
