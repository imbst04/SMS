import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  
  KeyboardAvoidingView,
 } from 'react-native';
import { Platform, useWindowDimensions } from 'react-native-web';

export default function Login(props) {
  const [borderColor1, setborderColor1] = useState(false);
  const [borderColor2, setborderColor2] = useState(false);

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
  return (
        <View style={styles.container}>
   
        
        <ImageBackground
        
          source={require('../assets/images/login.png')}
          style={styles.img}
        />
     
      <TextInput placeholder='Input' style={styles.input1}></TextInput>
    
        
      
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  img: {
   height: '100%',
    width: '100%',
   // flex:1,
   position: 'relative',
    resizeMode:'stretch',
    top:0,
    bottom:0,
  },

  
  input1: {
    // backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: '90%',
    color:'white',
    marginTop: 100,
    position: 'absolute'
    // borderRadius: 10,
    // marginTop: 20,
  },
  input2: {
    // backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '90%',
    // borderRadius: 10,
    // marginTop: 20,
  },
  button: {
    backgroundColor: '#30323e',
    marginTop: 10,
    width: '25%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
