import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import MyTabs from '../navigation/MyTabs';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ReCheck from '../screens/ReCheck';
import GenrateBill from '../screens/GenrateBill';
import NewCustomer from '../screens/NewCustomer';

const Stack = createNativeStackNavigator();

function SNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false, presentation: 'fullScreenModal'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ReCheck" component={ReCheck} />
      <Stack.Screen name="GenrateBill" component={GenrateBill} />
    </Stack.Navigator>
  );
}

export default SNavigation;
