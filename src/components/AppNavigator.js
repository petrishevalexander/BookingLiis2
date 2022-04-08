import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {HotelScreen} from '../screens/HotelScreen';
import {FavScreen} from '../screens/FavScreen';
//--
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavScreen" component={FavScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
//--
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Главная'}}
        /> */}
        <Stack.Screen
          name="TopTabNavigator"
          component={TopTabNavigator}
          options={{title: 'TopTabNavigator'}}
        />
        <Stack.Screen
          name="HotelScreen"
          component={HotelScreen}
          options={{title: 'HotelScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
