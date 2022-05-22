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
  ScrollView,
  
  KeyboardAvoidingView,
 } from 'react-native';
  import img from '../assets/images/login.png';
 export default function login(){
    return (

        <ImageBackground source={img} style={{position:'absolute', width:'100%', height:'100%'}}
        >
            <ScrollView>

            <Text>Working</Text>
              <TextInput
              name="email"
              placeholder='Working working'
              />
              </ScrollView>
        </ImageBackground>
    )

 }