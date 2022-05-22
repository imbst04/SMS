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

export default function NewCustomer(props) {

  return (
    // Image import 
    
    <ImageBackground source={img} style={styles.styleImage}
    >
      <View style={styles.inputContainer}>
        {/* <TextInput placeholder='Customer ID' style={styles.input1}></TextInput>
            <TextInput placeholder='Customer ID' style={styles.input1}></TextInput>
            <TextInput placeholder='Customer ID' style={styles.input1}></TextInput>
            <TextInput placeholder='Customer ID' style={styles.input1}></TextInput> */}

        
      <View style={[styles.card2, { backgroundColor: "#2ff2", width:'100%' }]}>
        <Text style={styles.title}>Add Customer</Text>
        <Sae
          label={"Customer Name"}
          iconClass={FontAwesomeIcon}
          iconName={"pencil"}
          iconColor={"white"}
        />
        <Sae
          style={styles.input}
          label={"Mobile Number"}
          iconClass={FontAwesomeIcon}
        />

        <TouchableOpacity style={styles.button} //onPress={"None"}
        >
            <Text style={{fontSize: 20,color:'white'}}>Add</Text>
          </TouchableOpacity>
      </View>

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
    fontSize: 20,
    fontWeight: "bold",
    opacity: 1,
    
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





