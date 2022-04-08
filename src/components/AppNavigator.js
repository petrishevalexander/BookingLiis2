import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SearchResultsScreen} from '../screens/SearchResultsScreen';
import {HotelScreen} from '../screens/HotelScreen';
import {FavScreen} from '../screens/FavScreen';
import {SearchBlock} from './SearchBlock';
//--
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <>
      <SearchBlock />
      <Tab.Navigator>
        <Tab.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
        />
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
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
        <Stack.Screen name="HotelScreen" component={HotelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
