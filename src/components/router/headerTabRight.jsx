import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {AppColor} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';
import StoreContext from '../../context';


const HeaderTabRight = () => {
  const navigation = useNavigation();

  const  {cart}=useContext(StoreContext)
  return (
    <View style={styles.right}>
      <TouchableOpacity>
        <SearchNormal size="28" color={AppColor.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(CART)}>
        {cart.length > 0 && (
          <View style={styles.badge}>
            <Text
              style={{color: AppColor.WHITE, fontSize: 12, fontWeight: '700'}}>
              {cart.length}
            </Text>
          </View>
        )}
        <ShoppingCart size="28" color={AppColor.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;

const styles = StyleSheet.create({
  right: {
    marginTop:5,
    flexDirection: 'row',
    gap: 14,
    marginRight: 18,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: AppColor.PRIMARY,
    alignItems:'center',
    justifyContent:'center',
    width: 18,
    height: 18,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99,
    top: -10,
    right: -8,
  },
});
