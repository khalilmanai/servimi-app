import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { getuser } from "../api/getUser";
import { TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Inputs from '../Components/Inputs'
import BottomButtons from '../Components/BottomButtons'
const Profile = (navigation) => {
  const [modSelected, setSelected] = useState(false);
  const [secSelected, setSecSelected] = useState(false);
  const [newUserName , setNewUserName] = useState('')
  const [newEmail , setNewEmail] = useState('')
  const [newPassword , setNewPassword] = useState('')
    
    
 function handleUserName(value){
  setNewUserName(value)
 }

 function handleEmail(value){
  setNewEmail(value)
 }
 function handlePassword(value){
  setNewEmail(value)
 }


  const user = getuser();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={32} />
        </TouchableOpacity>
        <View style={styles.centerBox}>
          <Image
            source={require("../assets/images/user.jpg")}
            resizeMode="contain"
            style={styles.img}
          />
          <View style={styles.textBox}>
            <Text style={{ fontFamily: "Cairo" }}>Bienvenue !</Text>
            <Text style={{ fontFamily: "Cairo", color: "#FB8703" }}>
              {user?.username}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="menu-outline" size={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
               setSecSelected(false)
            setSelected(true);
         
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Feather
              name="edit"
              size={32}
              color={modSelected ? "#FB8703" : "black"}
            />
            <Text style={styles.text}> Modifier</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(false)
            setSecSelected(true);
            
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons
              name="lock-open-outline"
              size={32}
              color={secSelected ? "#FB8703" : "black"}
            />
            <Text style={styles.text}> Sécurité</Text>
          </View>
        </TouchableOpacity>
      </View>

{/*       <View style={styles.inputs}>
        <Inputs 
        placeholder="Nom D'utilisateur" 
        value={newUserName}
        changeValue={handleUserName}
        type ='default'
        />
               <Inputs 
        placeholder="E-mail" 
        value={newEmail}
        changeValue={handleEmail}
        type ='email-address'
        />
               <Inputs 
        placeholder="Mot De Passe" 
        value={newPassword}
        changeValue={handlePassword}
        type ='email-address'
        />
        <BottomButtons />
        
      </View> */}
      <View>
        
      </View>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginTop: 50,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FB8703",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  centerBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    margin: 10,
    fontFamily: "Cairo",
  },
});
