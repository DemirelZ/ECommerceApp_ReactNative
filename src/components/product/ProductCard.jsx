import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Alert
} from 'react-native';
import React, {useContext} from 'react';
import {Heart} from 'iconsax-react-native';
import {width} from '../../utils/constants';
import {AppColor} from '../../theme/colors';
import Button from '../uı/Button';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, PRODUCTDETAIL} from '../../utils/routes';
import StoreContext from '../../context';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart, addFavourites, isLogin} = useContext(StoreContext);

  const CheckIsLogin = () => {
    if (isLogin) {
      addFavourites(item)
    } else {
      Alert.alert('Uyarı', 'Ürünü favorilere eklemek için lütfen giriş yapınız', [
        {
          text: 'Vazgeç',

          style: 'cancel',
        },
        {text: 'Login', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };

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
      <View style={{gap: 10, flex: 1}}>
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
            onPress={CheckIsLogin}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {item.isFav ? (
              <Heart color={AppColor.RED} variant="Bold" />
            ) : (
              <Heart color={AppColor.RED} variant="Linear" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button title={'Add to Cart'} onPress={() => addCart(item)} />
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: AppColor.SOFTGRAY,
    marginRight: 12,
    padding: 5,
    borderRadius: 8,
    width: width / 2.2,
    marginVertical: 10,
  },
  image: {
    width: width * 0.37,
    height: width * 0.3,
    resizeMode: 'contain',
    marginVertical: 5,
    alignSelf: 'center',
  },
});
