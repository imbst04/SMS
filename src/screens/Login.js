import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import img from '../assets/images/login.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default function Login(props) {

  //const [borderColor1, setborderColor1] = useState(false);
  //const [borderColor2, setborderColor2] = useState(false);

  const [state, setState] = useState({email: 'admin', pass: 'admin'});

  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Please Enter Correct Email and password',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      2,
      0,
    );
  };

  const login = () => {
    // if (email === state.email && pass === state.pass) {
    if (true) {
      navigation.replace('MyTabs');
    } else {
      showToast();
    }
  };

  const signup = () => {
    // if (email === state.email && pass === state.pass) {
    if (true) {
      navigation.replace('Signup');
    } else {
      showToast();
    }
  };
  
  return (
    // Image import 
    
    <ImageBackground source={img} style={styles.styleImage}
    >
      <View style={styles.inputContainer}>
        
      <View style={[styles.card2, { backgroundColor: "#2ff2", width:'100%' }]}>
        <Text style={styles.title}>L O G   I N</Text>
        
        <Sae
          label={"user ID"}
          iconClass={FontAwesomeIcon}
          iconName={"pencil"}
          iconColor={"white"}
        />
        <Sae
          style={styles.input}
          label={"Password"}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
        />

        <TouchableOpacity style={styles.button} onPress={login}
        >
            <Text style={{fontSize: 20,color:'white', fontWeight:'bold'}}>L  o  g  i  n</Text>
          </TouchableOpacity>
      </View>

          <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={signup}>
              <Text style={{color: 'white'}}>Sign Up for free</Text>
            </TouchableOpacity>

      </View>




    </ImageBackground>

    
    

  )
}
const styles = StyleSheet.create({

  styleImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // alignItems:'justify',
    marginTop: 40,
  },

  inputContainer: {
//    backgroundColor: 'red',
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
    //alignContent:'center'



  },
 

  container: {
    flex: 1,
    paddingTop: 24,
    width:'100%',
    backgroundColor: "white",
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
    
  },
  input: {
    marginTop: 4,
    
  },
  title: {
    paddingBottom: 16,
    textAlign: "center",
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    opacity: 1,
    fontWeight:'900'
    
  },

  button: {
    backgroundColor: 'blue',
    marginTop: 20,
    width: '90%',
    marginLeft:15,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    
  },





}
)





