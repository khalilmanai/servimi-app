import React from "react";
import qrImg from "../assets/images/qr-code.png";
import { View, Text, StyleSheet, Image} from "react-native";
import ContinueButton from "../Components/ContinueButton";
import { useSelector } from "react-redux";

const SecondScreen = ({ navigation }) => {

  const role = useSelector(state => state.role.role)

  const continuePressed = () => {

      navigation.navigate('LoginScreen')
  
  };
  
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={qrImg} />
      <Text style={styles.text}>
        Naviguez sur le menu et passer votre commande a travers le QR au coin du
        votre table
      </Text>
      <View style={styles.circle} />
      <ContinueButton onPress={continuePressed} />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginTop:'-50%',
    height: 500,
    width: 700,
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    fontFamily: "Cairo",
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 150,
    backgroundColor: "#FBB703",
    position: "absolute",
    bottom: -90,
    right: -90,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 200,
    elevation: 3,
    height: 39,
    backgroundColor: "#FFB703",
  },
  txtbtn: {
    color: "white",
    fontSize: 16,
  },
});
