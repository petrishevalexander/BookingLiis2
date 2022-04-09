import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {THEME} from '../assets/theme';
import {CustomButton} from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const onChangeEmail = value => {
    setEmail(value);
    setAlert(false);
  };

  const onChangePassword = value => {
    setPassword(value);
    setAlert(false);
  };

  const onButtonPress = async () => {
    await AsyncStorage.setItem('token', email);
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const regPassword = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (regEmail.test(email) === true && password.match(regPassword)) {
      console.log('valid');
      setPassword('');
      setEmail('');
      navigation.navigate('TopTabNavigator');
    } else {
      console.log('unvalid!!');
      setAlert(true);
    }
  };

  const getData = async () => {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      navigation.navigate('TopTabNavigator');
    } else {
      console.log('error');
    }
  };

  getData();

  return (
    <View>
      <ImageBackground
        style={styles.imageStyle}
        source={require('../assets/img/login.png')}>
        <View style={styles.container}>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Добро пожаловать в</Text>
            <Text style={styles.greetingTextHotelName}>Simple Hotel Check</Text>
          </View>
          <View style={styles.loginInfo}>
            <TextInput
              placeholder="Логин"
              style={styles.input}
              onChangeText={value => onChangeEmail(value)}
              value={email}
            />
            <TextInput
              secureTextEntry
              placeholder="Пароль"
              style={styles.input}
              onChangeText={value => onChangePassword(value)}
              value={password}
            />
          </View>
          {alert === true ? (
            <Text style={{color: THEME.WHITE_COLOR}}>
              Неверный логин или пароль. Повторите попытку
            </Text>
          ) : null}

          <View style={styles.button}>
            <CustomButton onPress={onButtonPress} title={'Войти'} />
          </View>
          <Text style={{color: '#fff'}}>{email}</Text>
          <Text style={{color: '#fff'}}>{password}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  greeting: {
    justifyContent: 'flex-start',
  },
  loginInfo: {
    alignItems: 'center',
  },
  greetingText: {
    color: THEME.WHITE_COLOR,
    fontSize: 20,
  },
  greetingTextHotelName: {
    color: THEME.WHITE_COLOR,
    fontSize: 28,
    fontWeight: '600',
  },
  input: {
    marginBottom: 5,
    borderRadius: 10,
    borderColor: THEME.MAIN_COLOR,
    backgroundColor: THEME.WHITE_COLOR,
    borderWidth: 1.2,
    marginHorizontal: 10,
    width: '100%',
    height: 40,
    padding: 10,
  },
  button: {
    marginHorizontal: -10,
  },
});
