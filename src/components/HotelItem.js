import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {THEME} from '../assets/theme';
import {toggleSelected} from '../store/actions';

export const HotelItem = ({hotel, goToHotel}) => {
  const dispatch = useDispatch();

  const changeSelectParam = () => {
    dispatch(toggleSelected(hotel.hotelId));
  };

  return (
    <TouchableOpacity style={styles.cardWrap} onPress={() => goToHotel(hotel)}>
      <View style={styles.hotelImageBlock}>
        <Image
          style={styles.hotelImg}
          source={require('../assets/img/hotel.png')}
        />
      </View>
      <View style={styles.cardBlock}>
        <Text>{hotel.hotelName}</Text>
        <Text>Цена: {hotel.priceFrom}р.</Text>
        <View style={styles.starsWrap}>
          {new Array(hotel.stars).fill(1).map((item, index) => {
            return (
              <Image
                key={index}
                style={styles.starImg}
                source={require('../assets/img/star.png')}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.likeBlock}>
        <TouchableOpacity onPress={changeSelectParam}>
          <Image
            style={styles.heartImg}
            source={
              hotel.selected
                ? require('../assets/img/heart_full.png')
                : require('../assets/img/heart_empty.png')
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    padding: 5,
    height: 100,
    backgroundColor: THEME.WHITE_COLOR,
    shadowColor: THEME.BLACK_COLOR,
    shadowOpacity: 0.1,
  },
  hotelImageBlock: {
    flex: 2,
  },
  cardBlock: {
    flex: 5,
  },
  likeBlock: {
    flex: 1,
    alignItems: 'flex-start',
  },
  starsWrap: {
    flexDirection: 'row',
  },
  starImg: {
    width: 15,
    height: 15,
    margin: 1,
  },
  hotelImg: {
    width: 65,
    height: 65,
    margin: 10,
  },
  heartImg: {
    width: 29,
    height: 25,
    margin: 10,
  },
});
