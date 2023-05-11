import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setScanned, setData } from "../redux/qrReducer";
import { useNavigation } from "@react-navigation/native";

export default function QRScanner() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        dispatch(setScanned(false));
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    try {
      dispatch(setScanned(true));
      dispatch(setData(data));

      navigation.navigate("ItemList");

      return true;
    } catch (error) {
      console.error("qr error", error);
    }
  };

  const handleScanAgain = () => {
    dispatch(setScanned(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <TouchableOpacity
          style={{ zIndex: 999, justifyContent: "flex-start" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="close" size={32} color="#FB8703" />
        </TouchableOpacity>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View
          style={{
            justifyContent: "flex-end",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.btn} onPress={handleScanAgain}>
            <Text style={styles.text}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn: {
    width: "70%",
    height: "10%",
    borderRadius: 10,
    backgroundColor: "#FB8703",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Cairo",
    fontSize: 16,
  },
  cameraView: {
    width: "95%",
    height: "90%",

    alignItems: "center",
    borderRadius: 20,
    position: "relative",
  },
});
