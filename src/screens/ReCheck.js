import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ReCheck = ({route}) => {
  const navigation = useNavigation();
  const data = route.params;
  const rondData = null;

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={styles.heading}>وزن</Text>
        <Text style={styles.heading}>ترتیب نمبر</Text>
      </View>
      <FlatList
        data={data}
        renderItem={value => (
          <View style={styles.mainView}>
            <Text style={styles.heading}>
              {Math.trunc(value.item / 40)} -{' '}
              {Math.trunc((value.item / 40 - Math.trunc(value.item / 40)) * 40)}
            </Text>
            <View></View>
            <Text style={styles.heading}>{value.index}</Text>
          </View>
        )}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('GenrateBill');
          }}>
          <Text style={styles.buttonText}>بل تیار کرے</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReCheck;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'green',
    marginVertical: 1,
    fontSize: 40,
  },
  heading: {
    fontSize: 40,
  },
  button: {
    backgroundColor: 'green',
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
});
