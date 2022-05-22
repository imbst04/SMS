import React from 'react';
import {View, Image} from 'react-native';

function Splash(props) {
  setTimeout(() => {
    props.navigation.replace('Login');
  }, 3000);
  return (
    <View >
      <Image source={require('../assets/images/splash.gif')} style={{width:'100%', height:'100%'}}/>
    </View>
  );
}
export default Splash;
