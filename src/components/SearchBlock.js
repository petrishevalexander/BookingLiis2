import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {THEME} from '../assets/theme';
import {CustomButton} from '../components/CustomButton';
import {LoginScreen} from '../screens/LoginScreen';
import {loadData} from '../store/actions';

export const SearchBlock = ({navigation}) => {
  const [inputCityName, setInputCityName] = useState('moscow');
  const [inputData, setInputData] = useState(new Date());
  const [inputDaysNumber, setInputDaysNumber] = useState('1');
  const [openDataPicker, setOpenDataPicker] = useState(false);

  const dispatch = useDispatch();

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
      <View style={styles.appHeader}>
        <Text style={styles.headerName}>Simple Hotel Check</Text>
        {/* <TouchableOpacity onPress={() => console.log('exit')}>
          <Image
            style={styles.exitImg}
            source={require('../assets/img/exit.png')}
          />
        </TouchableOpacity> */}
      </View>

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
  appHeader: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  exitImg: {
    width: 25,
    height: 25,
  },
  headerName: {
    fontWeight: '700',
    fontSize: 25,
  },
});
