import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const ItemPage = ({ route }) => {
  const item = route.params;
  const price = item.menuItems[0].prix;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  function itemtotal() {
    setTotal(price * quantity);
  }

  function increment() {
    setQuantity((value) => value + 1);
    itemtotal();
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity((value) => value - 1);
      itemtotal();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          style={styles.img}
          source={{uri : 'https://1a81-197-0-242-247.eu.ngrok.io/solutionprisecommandeatable/v1/MANAGER/image/display/1'}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSide}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={styles.name}>{item.menuItems[0].nom}</Text>
          <Text style={styles.name}>{price} DT</Text>
        </View>
        <View style={styles.description}>
          <Text style={{ fontFamily: "Cairo", fontSize: 24}}>
            {item.menuItems[0].description}
          </Text>
        </View>
        <View style={styles.counterBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                decrement();
              }}
            >
              <Ionicons
                name="remove-circle-outline"
                size={24}
                color="#FB8703"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                increment();
              }}
            >
              <Ionicons name="add-circle" size={24} color="#FB8703" />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Cairo" }}>
              x{quantity} = {total}
            </Text>
            
          </View>
          <TouchableOpacity >
              <View style={styles.confirm}>
              <Text>Confirmer</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBox: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  img: {
    marginTop: "5%",
    width: "70%",
    height: "70%",
  },
  bottomSide: {
    margin: 10,
   
  },
  name: {
    fontFamily: "Cairo",
    fontSize: 48,
  },
  description: {
     marginBottom:'5%',
    height: "50%",
    width: "90%",

  
  },
  counterBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "10%",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
  },
  box: {
    margin: 10,
  },
  confirm : {
    height:'100%',
    width:'150%',
    borderRadius:10,justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FB8703'
  }
});
