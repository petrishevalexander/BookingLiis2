import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {THEME} from '../assets/theme';

//
export const HotelScreen = ({route}) => {
  const hotel = route.params.hotel;
  let arrayStars = new Array(hotel.stars).fill(1);

  return (
    <View>
      <ImageBackground
        style={styles.hotelImg}
        imageStyle={{borderRadius: 20}}
        source={require('../assets/img/hotel_white.jpg')}>
        <View style={styles.hotelHeader}>
          <Text style={styles.imgText}>{hotel.hotelName}</Text>
          <View style={styles.starsWrap}>
            {arrayStars.map(item => {
              return (
                <Image
                  style={styles.starImg}
                  source={require('../assets/img/star.png')}
                />
              );
            })}
          </View>
        </View>
      </ImageBackground>
      <View style={styles.roomCard}>
        <Image
          style={styles.roomImg}
          source={require('../assets/img/hotel_room.jpeg')}
        />
        <View style={styles.roomInfo}>
          <Text>Улучшенный номер с кроватью размера "queen-size"</Text>
          <Text>Гостей: 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hotelImg: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  hotelHeader: {
    margin: 20,
  },
  imgText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    marginBottom: 5,
    textShadowColor: THEME.BLACK_COLOR,
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 5,
  },
  starsWrap: {
    flexDirection: 'row',
  },
  starImg: {
    width: 15,
    height: 15,
    margin: 1,
  },
  roomCard: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    // borderWidth: 1,
  },
  roomImg: {
    flex: 1,
    height: 90,
    borderRadius: 10,
  },
  roomInfo: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 10,
    // borderWidth: 1,
  },
});
