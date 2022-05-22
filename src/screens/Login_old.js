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
} from 'react-native';

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
      <View style={styles.topBackgroundContainer}>
        <Image
          source={require('../assets/images/login.png')}
          style={styles.img}
        />
      

    
        <View style={styles.formContainer}>
          <Text style={{fontSize: 50, color: '#fff', fontWeight:'900'}}>LOG IN</Text>
          <TextInput
            name="email"
            style={borderColor1 ? styles.input1 : styles.input2}
            placeholder="Email"
            placeholderTextColor='#999'
            // autoFocus={true}
            onFocus={() => setborderColor1(true)}
            onBlur={() => setborderColor1(false)}
            keyboardType="email-address"
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            style={borderColor2 ? styles.input1 : styles.input2}
            placeholder="Password"
            placeholderTextColor='#999'
            secureTextEntry={true}
            onFocus={() => setborderColor2(true)}
            onBlur={() => setborderColor2(false)}
            onChangeText={pass => setPass(pass)}
          />
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={{fontSize: 20,color:'white'}}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 20,
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={{color: 'white'}}>Sign Up for free</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackgroundContainer: {
    flex: 1,

  },
  img: {
    height: '100%',
    width: '100%',
    flex:1,
    resizeMode:'stretch'
  },

  formContainer: {
    width: '90%',
    height: 300,
    // backgroundColor: 'rgba(235,226, 219, 0.6)',
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    marginTop: '45%'

  },
  input1: {
    // backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: '90%',
    color:'white'
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
    backgroundColor: 'blue',
    marginTop: 20,
    width: '90%',
    marginLeft:15,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    
  },

});
