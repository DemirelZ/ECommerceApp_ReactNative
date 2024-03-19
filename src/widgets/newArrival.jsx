import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {PRODUCTS_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';
import Loading from '../components/uı/Loading';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getRequest(PRODUCTS_URL)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <View>
      <WidgetTitle title={'New Arrival'} />
      {!products ? (
        <Loading />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => <WidgetProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
