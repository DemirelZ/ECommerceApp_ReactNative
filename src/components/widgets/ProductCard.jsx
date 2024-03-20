import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {Heart} from 'iconsax-react-native';
import {width} from '../../utils/constants';
import {AppColor} from '../../theme/colors';
import Button from '../uı/Button';
import {useNavigation} from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}>
      
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={{gap: 10}}>
        <Text numberOfLines={3} style={{fontSize: 16, fontWeight: '800'}}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3, gap: 10}}>
            <Text style={{fontSize: 14, color: AppColor.SECONDARY}}>
              {item.category}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '800'}}>${item.price}</Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Heart color={AppColor.RED} />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: AppColor.SOFTGRAY,
    marginRight: 12,
    padding: 5,
    borderRadius: 8,
    width: width * 0.4,
  },
  image: {
    width: width * 0.37,
    height: width * 0.3,
    resizeMode: 'contain',
    marginVertical: 5,
    alignSelf: 'center',
  },
});
