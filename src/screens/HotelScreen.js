import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {THEME} from '../assets/theme';
import {CustomButton} from '../components/CustomButton';
import {toggleSelected} from '../store/actions';

export const HotelScreen = ({route, navigation: {goBack, navigate}}) => {
  const data = useSelector(state => state.hotelsReducer.data);
  const favHotels = useSelector(state => state.hotelsReducer.favourite);
  const hotelId = route.params.hotel.hotelId;
  const place = route.params.place;

  const hotel =
    place === 'searchResultScreen'
      ? data.find(h => h.hotelId === hotelId)
      : favHotels.find(h => h.hotelId === hotelId);

  const dispatch = useDispatch();

  const changeSelectParam = () => {
    if (place === 'favScreen') {
      navigate('TopTabNavigator');
    }
    dispatch(toggleSelected(hotel.hotelId));
  };

  return (
    <View>
      <ImageBackground
        style={styles.hotelImg}
        imageStyle={{borderRadius: 20}}
        source={require('../assets/img/hotel_white.jpg')}>
        <View style={styles.hotelHeader}>
          <View style={styles.imageBackgroundButtons}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image source={require('../assets/img/goBack.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={changeSelectParam}>
              <Image
                style={styles.heartImg}
                source={
                  hotel.selected
                    ? require('../assets/img/heart_full.png')
                    : require('../assets/img/heart_empty_white.png')
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.imgText}>{hotel.hotelName}</Text>
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
      </ImageBackground>
      <ScrollView>
        <View style={styles.roomInfoCard}>
          <Image
            style={styles.roomImg}
            source={require('../assets/img/hotel_room.jpeg')}
          />
          <View style={styles.roomInfo}>
            <Text>???????????????????? ?????????? ?? ???????????????? ?????????????? "queen-size"</Text>
            <Text>????????????: 2</Text>
          </View>
        </View>
        <View style={styles.roomImagesScroll}>
          <Text style={styles.header}>???????? ????????????</Text>
          <ScrollView horizontal={true}>
            <Image
              style={styles.imgScrollItem}
              source={require('../assets/img/hotelsScrollBlock/hotel_room_1.jpeg')}
            />
            <Image
              style={styles.imgScrollItem}
              source={require('../assets/img/hotelsScrollBlock/hotel_room_2.jpeg')}
            />
            <Image
              style={styles.imgScrollItem}
              source={require('../assets/img/hotelsScrollBlock/hotel_room_3.jpeg')}
            />
            <Image
              style={styles.imgScrollItem}
              source={require('../assets/img/hotelsScrollBlock/hotel_room_4.jpeg')}
            />
          </ScrollView>
        </View>
        <View style={styles.breakfastInfo}>
          <Text style={styles.header}>?????? ????????????????</Text>
          <View style={styles.breakfastInfoItem}>
            <Text style={styles.breakfastInfoItemText}>??????????????</Text>
          </View>
        </View>
        <View style={styles.bookingCard}>
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingInfoTitle}>???????? ???? ??????????:</Text>
            <Text style={styles.bookingInfoPrice}>{hotel.priceAvg} p.</Text>
          </View>
          <View style={styles.bookingButton}>
            <CustomButton
              onPress={() => Alert.alert('?????????? ???????????? ??????????????!')}
              title={'??????????????????????????'}
            />
          </View>
        </View>
      </ScrollView>
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
  imageBackgroundButtons: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: -180,
    width: '100%',
  },
  heartImg: {
    width: 29,
    height: 25,
  },
  starsWrap: {
    flexDirection: 'row',
  },
  starImg: {
    width: 15,
    height: 15,
    margin: 1,
  },
  roomInfoCard: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
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
  },
  roomImagesScroll: {
    marginTop: 10,
    marginLeft: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  imgScrollItem: {
    width: 150,
    height: 220,
    borderRadius: 10,
    marginRight: 10,
  },
  bookingCard: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
    backgroundColor: THEME.WHITE_COLOR,
    shadowColor: THEME.BLACK_COLOR,
    shadowOpacity: 0.1,
  },
  breakfastInfo: {
    margin: 10,
  },
  breakfastInfoItem: {
    marginTop: 5,
    width: 90,
    height: 25,
    backgroundColor: THEME.LIGHT_GREEN_COLOR,
    borderRadius: 5,
    padding: 3,
    justifyContent: 'center',
  },
  breakfastInfoItemText: {
    fontSize: 12,
    color: THEME.GREEN_COLOR,
    textAlign: 'center',
  },
  bookingInfo: {
    flex: 1,
    marginLeft: 10,
  },
  bookingInfoPrice: {},
  bookingInfoTitle: {
    color: THEME.GRAY_COLOR,
  },
  bookingButton: {
    flex: 1,
    marginTop: -10,
    justifyContent: 'center',
  },
});
