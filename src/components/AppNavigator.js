import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SearchResultsScreen} from '../screens/SearchResultsScreen';
import {HotelScreen} from '../screens/HotelScreen';
import {FavScreen} from '../screens/FavScreen';
import {SearchBlock} from './SearchBlock';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginScreen} from '../screens/LoginScreen';
import {THEME} from '../assets/theme';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export function TopTabNavigator() {
  return (
    <>
      <SearchBlock />
      <Tab.Navigator>
        <Tab.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
          options={{title: 'Поиск'}}
        />
        <Tab.Screen
          name="FavScreen"
          component={FavScreen}
          options={{title: 'Избранное'}}
        />
      </Tab.Navigator>
    </>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
        <Stack.Screen name="HotelScreen" component={HotelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
