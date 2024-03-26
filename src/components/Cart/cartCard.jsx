import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Counter from '../uı/Counter';
import {height, width} from '../../utils/constants';
import {AppColor} from '../../theme/colors';

const CartCard = ({item}) => {
  return (
    <View
      style={{

        backgroundColor: AppColor.WHITE,
        borderWidth: 0.5,
        borderColor: AppColor.SOFTGRAY,
        borderRadius: 10,
        marginVertical:10,
        flexDirection:'row'
      }}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={{flex:3, padding:5}}>
        <Text >{item.title}</Text>
        <Text style={{paddingTop:20, fontSize:18, fontWeight:'bold'}}>${item.price}</Text>
      </View>
      <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', paddingBottom:5, paddingRight:5}}>
        <Counter onChange={() => {}} size={18}/>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  image: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
    marginVertical: 5,
    alignSelf: 'center',
    padding:5,
    flex:1
  },
});
