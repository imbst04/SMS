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
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
    <ImageBackground source={img} style={{position:'absolute', width:'100%', height:'100%', alignItems:'center'}}
        >

      {/* <ScrollView contentContainerStyle={styles.scroll}> */}
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>فصل کا بل</Text>
      </View>
      <View style={styles.textFieldContainer}>
      <View style={styles.fields}>
          <TextInput
            style={styles.textField}
            // keyboardType={'al'}
            textAlign="right"
            value={name}
            onChangeText={value=>setname(value )
            }
          />
          <Text style={styles.textLabel}>نام: </Text>
        </View>
      <View style={styles.fields}>
          <TextInput
            style={styles.textField}
            // keyboardType={'al'}
            textAlign="right"
            value={item}
            onChangeText={value=>setitem(value )
            }
          />
          <Text style={styles.textLabel}>آئٹم: </Text>
        </View>
        <View style={styles.fields}>
          <TextInput
            style={styles.textField}
            placeholder="0"
            keyboardType={'number-pad'}
            textAlign="right"
            value={inputWeight}
            onChangeText={value =>setInputWeight(value)
            }
          />
          <Text style={styles.textLabel}>وزن: </Text>
        </View>
        <View style={styles.fields}>
          <TouchableOpacity style={styles.button} onPress={(value=> setTotalWeight(inputWeight))}>
            <Text style={{...styles.buttonText, fontSize: 50}}>دوسرا وزن</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, width: '95%'}}>
          <View style={styles.mainView}>
            <Text style={styles.heading}>وزن</Text>
            <Text style={styles.heading}>ترتیب نمبر</Text>
          </View>
          <FlatList
            data={totalWeight}
            renderItem={value => (
              <View style={styles.mainView}>
                {/* <Text>
                  {value.item}
                </Text> */}
                <Text style={styles.heading}>
                  {Math.trunc(value.item / 40)} -{' '}
                  {Math.trunc(
                    (value.item / 40 - Math.trunc(value.item / 40)) * 40,
                  )}
                </Text>
                <View></View>
                <Text style={styles.heading}>{value.index + 1}</Text>
              </View>
            )}
          />
          <ScrollView contentContainerStyle={styles.scroll}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <View style={{...styles.fields, flex: 1}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('GenrateBill', totalWeight);
                  }}>
                  <Text style={styles.buttonText}>بل تیار کرے</Text>
                </TouchableOpacity>
              </View>

              <View style={{...styles.fields, flex: 1}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('ReCheck', totalWeight);
                  }}>
                  <Text style={styles.buttonText}>دوبارہ چیک کرے</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
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
  scroll: {
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'center'
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
    alignItems:'center',
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
