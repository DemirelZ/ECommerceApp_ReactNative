import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Heart} from 'iconsax-react-native';
import {width} from '../../utils/constants';
import {AppColor} from '../../theme/colors';

const WidgetProductCard = ({item}) => {

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={{gap: 10}}>
        <Text numberOfLines={3} style={{fontSize: 16, fontWeight: '800'}}>{item.title}</Text>
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
      <TouchableOpacity>
        <Text>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WidgetProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: AppColor.SECONDARY,
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
