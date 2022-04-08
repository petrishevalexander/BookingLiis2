import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {HotelScreen} from '../screens/HotelScreen';
import {FavScreen} from '../screens/FavScreen';
import {SearchBlock} from './SearchBlock';
import {TestComp} from '../components/TestComp';
//--
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <>
      <SearchBlock />
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="FavScreen" component={FavScreen} />
      </Tab.Navigator>
    </>
  );
}
//--
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TopTabNavigator"
          component={TopTabNavigator}
          // options={{title: 'TopTabNavigator'}}
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
