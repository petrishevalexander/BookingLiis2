import React from 'react';
import {Text, View} from 'react-native';

//
export const HotelScreen = ({route}) => {
  const hotel = route.params.hotel;
  return (
    <View>
      <Text>{hotel.hotelName}</Text>
    </View>
  );
};
