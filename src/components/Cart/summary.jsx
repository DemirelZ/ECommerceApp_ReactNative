import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Button from '../uı/Button';
import {AppColor} from '../../theme/colors';
import {height} from '../../utils/constants';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGIN} from '../../utils/routes';

const Summary = () => {
  const navigation = useNavigation();

  const {isLogin} = useContext(StoreContext);

  const CheckOut = () => {
    if (isLogin) {
      navigation.navigate(CHECKOUT);
    } else {
      Alert.alert('Uyarı', 'Ürün satın almak için lütfen giriş yapınız', [
        {
          text: 'Vazgeç',

          style: 'cancel',
        },
        {text: 'Login', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text
            style={{color: AppColor.SOFTGRAY, fontSize: 18, fontWeight: '600'}}>
            Subtotal
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600'}}>800</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text
            style={{color: AppColor.SOFTGRAY, fontSize: 18, fontWeight: '600'}}>
            Delivery Fee
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600'}}>20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text
            style={{color: AppColor.SOFTGRAY, fontSize: 18, fontWeight: '600'}}>
            Discount
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600'}}>0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text
            style={{color: AppColor.SOFTGRAY, fontSize: 18, fontWeight: '600'}}>
            TOTAL
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600'}}>820</Text>
        </View>
      </View>

      <Button onPress={CheckOut} title={'Checkout'} />
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    paddingBottom: height * 0.05,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: AppColor.SOFTGRAY,
    backgroundColor: '#FAFAFA',
  },
});
