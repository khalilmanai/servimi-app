import {React , useState} from 'react'
import {View , StyleSheet, ScrollView , TouchableOpacity} from 'react-native'

import BottomButtons from '../Components/BottomButtons'
import Inputs from '../Components/Inputs'
import InfoTemplate from './InfoTemplate'
import { Ionicons } from "@expo/vector-icons";
const InputsScreen = ({navigation}) => {

  const [userName, setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUserNameChange = (value) => {
    setUserName(value);
    
  };
  const handleEmailChange = (value) => {
    setEmail(value);
    setUserNameError(validateEmail(value));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  const validateEmail = (email) => {
    // Email validation logic here
    
  };
  const validatePassword = (email) => {
    // Email validation logic here
    
  };
  const handleSubmit = () => {
    const userData = {
      username: userName,
      email : email,
      password: password,
    };
    console.log(userData);
    // Validate inputs and submit form
  };
  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };

const goto = ()=>{
  navigation.navigate('LoginScreen')
}

  return (
    <ScrollView  style={styles.Scrollcontainer}>
   <View style={styles.container}>
    <InfoTemplate text='Vos Informations' />
    </View>
    <View style={styles.inputcontainer}>
    <Inputs
        label="Nom D'utilisateur"
        value={userName}
        changeValue={handleUserNameChange}
       
      />
        
         <Inputs label ='Email'   value={email}
        changeValue={handleEmailChange}
        type='email-address'
        />
        <View style={styles.passContainer}>
        <Inputs
          label="Mot de Passe"
          value={password}
          changeValue={handlePasswordChange}
          secureText={obscure}
        />
        <TouchableOpacity
        style={styles.suffixIcon}
          onPress={() => {
            handleObscure();
          }}
        >
          <Ionicons
            name={obscure ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      
         </View>
         <BottomButtons onPressContinue={()=>{
          goto()
          handleSubmit()
         }}/>
    
   
   </ScrollView>
  )
}
const styles = StyleSheet.create({
  Scrollcontainer : {
    flex:1,
   
  },
  
  
  container : {
    flex:2, 
    marginTop:150,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
  },
  inputcontainer : {
    flex:3,
  justifyContent:'center',
  alignItems:'center',
   margin:30,
  },
  suffixIcon:{
    marginLeft:'-6%',
    marginBottom:'5%'
   },
   passContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
})

export default InputsScreen