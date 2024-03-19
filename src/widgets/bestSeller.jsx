import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL, PRODUCTS_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';
import CategorySelect from '../components/widgets/categorySelect';
import Loading from '../components/uı/Loading';

const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const getSelectedCategoryProducts = (category = 'jewelery') => {
    getRequest(CATEGORY_URL + `/${category}`)
      .then(res => setSelectedCategory(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getSelectedCategoryProducts();
  }, []);
  return (
    <View>
      <WidgetTitle title={'Best Seller'} />
      <CategorySelect handleSelect={getSelectedCategoryProducts} />
      {!selectedCategory ? (
        <Loading />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={selectedCategory}
          renderItem={({item}) => <WidgetProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({});
