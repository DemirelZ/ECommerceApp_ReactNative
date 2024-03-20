import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { AppColor } from '../../theme/colors';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={AppColor.PRIMARY} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
