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
  ScrollView
} from 'react-native';

export default function Sale(props) {

  const navigation = useNavigation();
  return (
    // Image import 
    
    <ImageBackground source={img} style={styles.styleImage}
    >
      <ScrollView>
      <View style={styles.inputContainer}>
               
      <View style={[styles.card2, { backgroundColor: "#2ff2", width:'100%' }]}>
        <Text style={styles.title}> Item Sale</Text>
        <Sae
          label={"Item ID"}
          iconClass={FontAwesomeIcon}
          iconName={"pencil"}
          iconColor={"white"}
        />
        <Sae
          style={styles.input}
          label={"Description"}
          iconClass={FontAwesomeIcon}
        />
        <Sae
          style={styles.input}
          label={"Quantity"}
          iconClass={FontAwesomeIcon}
        />
         <Sae
          style={styles.input}
          label={"Customer ID"}
          iconClass={FontAwesomeIcon}
        />
         <Sae
          style={styles.input}
          label={"Costomer Name"}
          iconClass={FontAwesomeIcon}
        />
        <Sae
          style={styles.input}
          label={"Rate"}
          iconClass={FontAwesomeIcon}
        />
        <Sae
          style={styles.input}
          label={"Price"}
          iconClass={FontAwesomeIcon}
        />
         <Sae
          style={styles.input}
          label={"isCash"}
          iconClass={FontAwesomeIcon}
        />
       
        <TouchableOpacity style={styles.button} //onPress={"None"}
        >
            <Text style={{fontSize: 20,color:'white'}}>Sale out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}
        >
            <Text style={{fontSize: 20,color:'white'}}>Cancel</Text>
          </TouchableOpacity>
      </View>

      </View>
      </ScrollView>

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
    marginTop: 5,
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





