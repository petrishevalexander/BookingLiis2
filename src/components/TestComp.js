import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const TestComp = () => <Text style={styles.container}>text comp</Text>;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: 'center',
    borderWidth: 3,
  },
});
