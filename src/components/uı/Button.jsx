import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { AppColor } from '../../theme/colors';

const Button = (props) => {
   const {title}=props
   console.log(props)
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container:{
   
    
    backgroundColor:AppColor.PRIMARY,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:8,
    paddingHorizontal:15,
    borderRadius:5
  },
  text:{
    color:AppColor.WHITE,
    fontSize:16,
    fontWeight:'600'
  }
});
