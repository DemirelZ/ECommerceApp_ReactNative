import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CATEGORY_URL, PRODUCTS_URL} from '../../service/urls';
import Loading from '../../components/uı/Loading';
import {getRequest} from '../../service/verbs';
import ProductCard from '../../components/product/ProductCard';
import {screenStyle} from '../../styles/Screenstyle';
import CategorySelect from '../../components/widgets/categorySelect';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productCategory = route?.params?.title;

  const getAllProducts = category => {
    setIsLoading(true);
    const url = category ? CATEGORY_URL + `/${category}` : PRODUCTS_URL;
    getRequest(url)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts(productCategory);
  }, []);

  return (
    <View style={[screenStyle.container, styles.spaceTop]}>
      <CategorySelect handleSelect={getAllProducts} />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  spaceTop: {
    paddingVertical: 20,
  },
});
