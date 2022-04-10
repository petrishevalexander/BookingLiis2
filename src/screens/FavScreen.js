import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HotelItem} from '../components/HotelItem';
import {useDispatch, useSelector} from 'react-redux';
import {THEME} from '../assets/theme';
import {sortSelected} from '../store/actions';

export const FavScreen = ({navigation}) => {
  const favHotels = useSelector(state => state.hotelsReducer.favourite);
  const [priceSortActive, setPriceSortActive] = useState(false);
  const [ratingSortActive, setRatingSortActive] = useState(false);
  const place = 'favScreen';
  const goToHotel = hotel => {
    navigation.navigate('HotelScreen', {hotel, place});
  };
  const dispatch = useDispatch();
  const onSort = field => {
    if (field === 'price') {
      setPriceSortActive(true);
      setRatingSortActive(false);
      dispatch(sortSelected('price'));
    } else if (field === 'rating') {
      dispatch(sortSelected('rating'));
      setRatingSortActive(true);
      setPriceSortActive(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchResutls}>
          <Text style={styles.header}>Отели, которые Вам понравились:</Text>
          <View style={styles.sortWrap}>
            <View style={styles.sortTextWrap}>
              <Text style={styles.sortText}>Сортировать по:</Text>
            </View>
            <TouchableOpacity
              style={
                priceSortActive
                  ? {
                      ...styles.sortButtonWrap,
                      backgroundColor: THEME.MAIN_COLOR,
                    }
                  : {...styles.sortButtonWrap}
              }
              onPress={() => onSort('price')}>
              <Text style={styles.sortButtonText}>Цена ↓</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                ratingSortActive
                  ? {
                      ...styles.sortButtonWrap,
                      backgroundColor: THEME.MAIN_COLOR,
                    }
                  : {...styles.sortButtonWrap}
              }
              onPress={() => onSort('rating')}>
              <Text style={styles.sortButtonText}>Рейтинг ↑</Text>
            </TouchableOpacity>
          </View>
          {favHotels.map(item => (
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
  sortWrap: {
    flexDirection: 'row',

    marginBottom: 10,
  },
  sortTextWrap: {
    flex: 3,
    justifyContent: 'center',
  },
  sortText: {
    fontSize: 16,
  },
  sortButtonWrap: {
    flex: 1,
    width: 90,
    height: 25,
    backgroundColor: THEME.LIGHT_GRAY_COLOR,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    marginHorizontal: 3,
  },
  sortButtonText: {
    fontSize: 12,
    color: THEME.WHITE_COLOR,
  },
});
