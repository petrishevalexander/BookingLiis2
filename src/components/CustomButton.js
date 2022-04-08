import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../assets/theme';

export const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: THEME.MAIN_COLOR,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: THEME.WHITE_COLOR,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
