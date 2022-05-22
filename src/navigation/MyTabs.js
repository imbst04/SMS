import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../screens/Home';
import Sale from '../screens/Sale';
import Setting from '../screens/Setting';
import WeightCalculator from '../screens/WeightCalculator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewCustomer from '../screens/NewCustomer';
import NewItem from '../screens/NewItem'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="Weight"
        component={WeightCalculator}
        options={{
          headerShown:false,
          title: 'کیلکولیٹر',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sale"
        component={Sale}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="logo-usd" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
          name="NewCustomer"
          component={NewCustomer}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-add-outline" color={color} size={size} />
            ),
          }}
        />

      <Tab.Screen
        name="NewItem"
        component={NewItem}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
