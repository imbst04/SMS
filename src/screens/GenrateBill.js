import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native';
import React from 'react';
// import { TextInput } from 'react-native-gesture-handler';
import img from '../assets/images/login.png';
import {useNavigation} from '@react-navigation/native';



const GenrateBill = ({route}) => {
  const navigation = useNavigation();
  const data = route.params;
  let rondData = null;

  console.log(data);
  data.forEach(element => {
    console.log(rondData+= element);
  });
  console.log(rondData/40);
  
  return (
    <ImageBackground source={img} style={{position:'absolute', width:'100%', height:'100%', alignItems:'center'}}
        >
    {/* <View style={styles.mainContainer}> */}
      {/* <View style={styles.contentcontainer}> */}
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>فصل کا بل</Text>
      </View>
        <View style={styles.content}>
          <TextInput style={styles.input} textAlign="right" />
          <Text style={styles.label}>گاہک کا نام</Text>
          <TextInput style={styles.input} textAlign="right" />
          <Text style={styles.label}>Item</Text>
        </View>
      {/* </View> */}
    {/* </View> */}
        </ImageBackground>
  );
};

export default GenrateBill;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentcontainer: {
    width: '90%',
    backgroundColor: 'rgba(20,90,140,0.3)',
    height: 300,
    borderRadius: 15,
  },
  content: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    color: 'white',
    fontSize: 30,
    flex: 2,
    fontFamily: 'Jameel Noori Nastaleeq',
  },
  input: {
    backgroundColor: 'orange',
    flex: 4.5,
    borderRadius: 10,
    fontSize: 20,
  },
  mainHeading: {
    // backgroundColor: 'rgba(0, 50, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    width: '90%',
    borderRadius: 30,
    marginTop:100,
    borderBottomColor:'white',
    borderWidth:1,
  }, mainHeadingText: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'Jameel Noori Nastaleeq',
  },
});
