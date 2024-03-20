import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constants';
import {AppColor} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSLIST} from '../utils/routes';

const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image style={styles.image} source={require('../assets/images2.jpeg')} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(PRODUCTSLIST);
        }}
        style={styles.button}>
        <Text style={{color: AppColor.WHITE, fontWeight: '600'}}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  image: {
    width: '100%',

    backgroundColor: 'blue',
    height: height / 4.4,
    resizeMode:'stretch'
  },
  button: {
    backgroundColor: '#B20000',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3.5,
    height: height / 16,
    borderWidth: 2,
    borderColor: AppColor.WHITE,
    position: 'absolute',
    bottom: '10%',
    left: '4%',
  },
});
