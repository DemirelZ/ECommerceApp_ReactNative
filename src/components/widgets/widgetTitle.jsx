import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTSLIST } from '../../utils/routes';

const WidgetTitle = ({title}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(PRODUCTSLIST, {title:title})}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WidgetTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: AppColor.BLACK,
  },
  seeAll: {
    color: 'gray',
  },
});
