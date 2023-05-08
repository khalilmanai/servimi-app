import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { disconnect } from "../api/axios";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Settings = () => {
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    enabled={false}
    style={styles.container}
  >
    <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity
          style={{ margin: "2%" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={34} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Paramétres</Text>
      </View>
      <View style={styles.contents}>
        <TouchableOpacity
          style={styles.banner}
          onPress={() =>
            navigation.navigate("StackScreens", { screen: "Account" })
          }
        >
          <Text style={styles.contentText}>Paramétres Profile</Text>
          <Ionicons name="chevron-forward" size={16} color="#FB8703" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.banner} onPress={toggleDropdown}>
          <Text style={styles.contentText}>Sécurité</Text>
          <Ionicons
            name={showDropdown ? "chevron-up" : "chevron-down"}
            size={16}
            color="#FB8703"
          />
        </TouchableOpacity>

        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => {
                navigation.navigate("StackScreens", {
                  screen: "ResetPassword",
                });
              }}
            >
              <Text style={styles.contentText}>Changer mot de passe</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={styles.disconnect}
    >

      <TouchableOpacity
       
        onPress={() => disconnect(navigation)}
      >
        <Text style={styles.disconnectText}>se déconnecter</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    margin: 60,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Cairo",
    fontSize: 34,
    marginLeft: "15%",
  },
  contents: {
    width: "100%",
    alignItems: "center",
  },
  banner: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  contentText: {
    fontFamily: "Cairo",
    color: "#FB8703",
  },

  dropdown: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  dropdownButton: {
    paddingVertical: 18,
  },
  disconnect: {

    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    padding: 10,
    marginTop: "40%",
    borderColor: "red",
    alignItems: "center",
  },
  disconnectText: {
    fontFamily: "Cairo",
    color: "red",
  },
});
