import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {THEME} from '../assets/theme';
import {CustomButton} from '../components/CustomButton';

export const LoginScreen = () => {
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
              //   onChangeText={setInputCityName}
              //   value={inputCityName}
            />
            <TextInput
              placeholder="Пароль"
              style={styles.input}
              //   onChangeText={setInputCityName}
              //   value={inputCityName}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={() => console.log('login pressed')}
              title={'Войти'}
            />
          </View>
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
    // borderWidth: 1,
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
