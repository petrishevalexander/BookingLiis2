import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {HotelScreen} from '../screens/HotelScreen';
// import {THEME} from '../theme';
import {FavScreen} from '../screens/FavScreen';

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// function TopTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="FavScreen" component={FavScreen} />
//     </Tab.Navigator>
//   );
// }

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Главная'}}
        />
        {/* <Stack.Screen
          name="TopTab"
          component={TopTab}
          options={{title: 'TopTab'}}
        /> */}
        <Stack.Screen
          name="HotelScreen"
          component={HotelScreen}
          options={{title: 'HotelScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
