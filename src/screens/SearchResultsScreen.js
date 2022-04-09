import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HotelItem} from '../components/HotelItem';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SearchResultsScreen = ({navigation}) => {
  const data = useSelector(state => state.hotelsReducer.data);

  const place = 'searchResultScreen';
  const goToHotel = hotel => {
    navigation.navigate('HotelScreen', {hotel, place});
  };

  const onExit = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('LoginScreen');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchResutls}>
          <View style={styles.listHeader}>
            <Text style={styles.header}>Подходящие бронирования:</Text>
            <TouchableOpacity onPress={onExit}>
              <Image
                style={styles.exitImg}
                source={require('../assets/img/exit.png')}
              />
            </TouchableOpacity>
          </View>

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
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  header: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },
  exitImg: {
    width: 25,
    height: 25,
  },
});
