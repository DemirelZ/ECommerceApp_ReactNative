import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {screenStyle} from '../../styles/Screenstyle';
import Button from '../../components/uı/Button';
import Counter from '../../components/uı/Counter';
import {height, width} from '../../utils/constants';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Loading from '../../components/uı/Loading';
import {AppColor} from '../../theme/colors';
import {Heart, Star, Star1} from 'iconsax-react-native';
import StoreContext from '../../context';

const ProductDetail = ({route}) => {
  const {item} = route?.params;

  const [product, setProduct] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const {addCart}=useContext(StoreContext)

  const getProductDetail = id => {
    setIsLoad(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoad(false);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoad ? (
        <Loading />
      ) : (
        <ScrollView style={{paddingTop: 30}}>
          <Image
            source={{
              uri: product.image,
            }}
            style={styles.image}
          />
          <View style={{gap: 10}}>
            <Text numberOfLines={3} style={{fontSize: 25, fontWeight: '800'}}>
              {product.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3, gap: 10}}>
                <Text style={{fontSize: 14, color: AppColor.SECONDARY}}>
                  {product.category}
                </Text>
                <Text style={{fontSize: 28, fontWeight: '800'}}>
                  ${product.price}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Heart color={AppColor.RED}  size={34} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Star color={AppColor.PRIMARY} size={30} variant={'Bold'} />
              <Text style={{fontSize: 18}}>{product?.rating?.count}/</Text>
              <Text style={{fontSize: 18}}>{product?.rating?.rate}</Text>
            </View>
            <View>
              <Text>{product.description}</Text>
            </View>
          </View>
        </ScrollView>
      )}
      <View style={styles.bottomcontainer}>
        <View style={styles.counterWrapper}>
          <Counter onChange={() => {}} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title={'Add to Cart'} onPress={()=>addCart(product)} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  bottomcontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',

    width: width*0.98,
    height: height * 0.06,

    position: 'absolute',
    bottom: height * 0.04,
    gap: 10,
    zIndex:100,
    backgroundColor:AppColor.WHITE
  },
  counterWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 6,
  },

  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    marginVertical: 5,
    alignSelf: 'center',
  },
});
