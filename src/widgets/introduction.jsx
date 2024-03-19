import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constants';
import { AppColor } from '../theme/colors';

const Introduction = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/images2.jpeg')} />
      <TouchableOpacity style={styles.button}>
        <Text style={{color:AppColor.WHITE, fontWeight:'600'}}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  image: {
    width: width*0.95,
    height: height / 4.4,
    resizeMode: 'contain',
  },
  button:{
    backgroundColor:'#B20000',
    alignItems:'center',
    justifyContent:'center',
    width:120,
    height:40,
    borderWidth:2,
    borderColor:AppColor.WHITE,
    position:'absolute',
    bottom:33,
    left:19

  }
});
