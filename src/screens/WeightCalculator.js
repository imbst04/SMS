import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import img from '../assets/images/login.png';


const WeightCalculator = () => {
  const navigation = useNavigation();
  const [totalWeight, setTotalWeight] = useState(null)
  const [inputWeight, setInputWeight] = useState(null);
  console.log(totalWeight);
  console.log(inputWeight);
  const [name, setname] = useState(null);
  const [item, setitem] = useState(null);

  // this function calculate weight and convert into kg
  const weightCalculate = value => {
    const kg1 = state.inputWeight.split('-')[0] * 40;
    const kg = parseInt(state.inputWeight.split('-')[1]) + kg1;
    console.log(parseInt(state.inputWeight.split('-')[1]));
    console.log(kg);
    if (state.inputWeight == '') {
      showToast('وزن لکھو');
    } else if (state.inputWeight.split('-')[1] > 40) {
      showToast('کلو درست کرو');
    } else {
      setState(prev => ({
        ...state,
        totalWeight: [...prev.totalWeight, kg],
        inputWeight: '',
      }));
    }
  };

  return (
    <>
      <ImageBackground source={img} style={{ flex: 1 }}>

          <View style={styles.inputContainer}>

            <View style={styles.card2}>
              <Text style={styles.title}> Bill Calculate</Text>
              <ScrollView >

                <Sae
                  label={"Customer Name"}
                  iconClass={FontAwesomeIcon}
                  iconName={"pencil"}
                  iconColor={"white"}
                />
                <Sae
                  label={"Itme"}
                  iconClass={FontAwesomeIcon}
                  style={styles.input}
                />
                <Sae
                  label={"Deduction"}
                  iconClass={FontAwesomeIcon}
                  style={styles.input}
                />
                <Sae
                  label={"Price"}
                  style={styles.input}
                  iconClass={FontAwesomeIcon}
                />
                <Sae
                  label={"Partner"}
                  style={styles.input}
                  iconClass={FontAwesomeIcon}
                />

                <TouchableOpacity style={styles.button} //onPress={"None"}
                >
                  <Text style={{ fontSize: 20, color: 'white' }}>Add Item</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}
                >
                  <Text style={{ fontSize: 20, color: 'white' }}>Cancel</Text>
                </TouchableOpacity>
              </ScrollView>

            </View>

          </View>
        
      </ImageBackground>
    </>
  );
};
const showToast = msg => {
  ToastAndroid.showWithGravityAndOffset(
    msg,
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    2,
    0,
  );
};

export default WeightCalculator;

const styles = StyleSheet.create({

  inputContainer: {
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
  },


  container: {
    flex: 1,
    paddingTop: 24,
    width: '100%',
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
    backgroundColor: "#2ff2",
    width: '95%',
    borderRadius: 20

  },
  input: {
    marginTop: 4,

  },
  title: {
    padding: 8,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: 'rgba(24,32,14,0.2)',
    borderBottomColor: 'green',
    borderBottomWidth: 5,
    borderRadius: 10

  },

  button: {
    backgroundColor: 'blue',
    marginTop: 20,
    width: '90%',
    marginLeft: 15,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,

  },


  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainHeading: {
    // backgroundColor: 'rgba(0, 50, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    width: '90%',
    borderRadius: 30,
    marginTop: 100,
    borderBottomColor: 'white',
    borderWidth: 1,
  },
  mainHeadingText: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'Jameel Noori Nastaleeq',
  },
  textFieldContainer: {
    backgroundColor: 'rgba(30,50,100,0.2)',
    width: '90%',
    marginTop: 20,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textField: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 10,
    color: 'black',
    fontSize: 30,
    direction: 'ltr',
  },
  textLabel: {
    fontSize: 40,
    fontFamily: 'Jameel Noori Nastaleeq',
    color: '#0af',
  },
  button: {
    backgroundColor: 'rgb(00,99,00)',
    alignItems: 'center',
    width: '95%',
    alignContent: 'space-around',
    borderRadius: 15,
    marginVertical: 2,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Jameel Noori Nastaleeq',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    marginVertical: 1,
    fontSize: 30,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    color: 'white',
  },
});
