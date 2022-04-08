import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HotelItem} from '../components/HotelItem';
import {useSelector} from 'react-redux';

export const HomeScreen = ({navigation}) => {
  const data = useSelector(state => state.hotelsReducer.data);

  const favHotels = useSelector(state => state.hotelsReducer.favourite);
  console.log(favHotels);

  const goToHotel = hotel => {
    navigation.navigate('HotelScreen', {hotel});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchResutls}>
          <Text style={styles.header}>Подходящие бронирования</Text>
          {data.map(item => (
            <HotelItem key={item.hotelId} hotel={item} goToHotel={goToHotel} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  searchResutls: {
    marginHorizontal: 10,
  },
  header: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },
});
