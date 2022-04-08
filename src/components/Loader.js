import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 20,
  },
});
