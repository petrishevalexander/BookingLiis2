import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {THEME} from '../assets/theme';
import {CustomButton} from '../components/CustomButton';
import {loadData} from '../store/actions';

export const SearchBlock = ({navigation}) => {
  const [inputCityName, setInputCityName] = useState('moscow');
  const [inputData, setInputData] = useState(new Date());
  const [inputDaysNumber, setInputDaysNumber] = useState('1');
  const [openDataPicker, setOpenDataPicker] = useState(false);

  const dispatch = useDispatch();

  const favHotels = useSelector(state => state.hotelsReducer.favourite);
  console.log(favHotels);

  const onSearch = () => {
    if (!inputCityName || !inputData || !inputDaysNumber) {
      Alert.alert('Please, full in all fields.', [{text: 'OK'}]);
    } else {
      const city = inputCityName.replace(/\s+/g, '');
      const dateCheckIn = inputData.toISOString().substring(0, 10);
      const dateCheckOutFull = new Date(inputData);
      dateCheckOutFull.setDate(inputData.getDate() + Number(inputDaysNumber));
      const dateCheckOut = dateCheckOutFull.toISOString().substring(0, 10);
      dispatch(loadData({city, dateCheckIn, dateCheckOut}));
    }
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBlock}>
        <Text style={{...styles.header, paddingHorizontal: 10}}>
          Куда едем?
        </Text>
        <TextInput
          placeholder="location"
          style={styles.input}
          onChangeText={setInputCityName}
          value={inputCityName}
        />
        <View style={styles.datesBlock}>
          <TextInput
            placeholder="date"
            style={{...styles.input, ...styles.inputDate}}
            onPressIn={() => setOpenDataPicker(true)}
            value={inputData.toLocaleDateString()}
          />
          <TextInput
            placeholder="number of days"
            style={{...styles.input, ...styles.inputDate}}
            keyboardType="numeric"
            onChangeText={setInputDaysNumber}
            value={inputDaysNumber}
          />
        </View>
        <CustomButton onPress={onSearch} title={'Найти'} />
      </View>
      <DatePicker
        modal
        mode="date"
        open={openDataPicker}
        date={inputData}
        onConfirm={date => {
          setOpenDataPicker(false);
          setInputData(date);
        }}
        onCancel={() => {
          setOpenDataPicker(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  searchBlock: {
    backgroundColor: THEME.WHITE_COLOR,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: THEME.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  datesBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 5,
    borderRadius: 10,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 1.2,
    marginHorizontal: 10,
    height: 40,
    padding: 10,
  },
  header: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },
  inputDate: {
    width: '45%',
  },
});
