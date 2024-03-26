import {FlatList, StyleSheet, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import {AppColor} from '../../theme/colors';
import CategoryCard from '../../components/Category/CategoryCard';
import {screenStyle} from '../../styles/Screenstyle';
import Loading from '../../components/uı/Loading';


const Categories = () => {
  const [category, setCategory] = useState([]);

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={[screenStyle.container, {paddingTop: 30}]}>
      {!category ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category}
          renderItem={({item}) => <CategoryCard item={item} />}
          keyExtractor={item => item.id}
        />
      )}
      
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    padding: 30,
    borderRadius: 100,
    backgroundColor: AppColor.SOFTGRAY,
    marginRight: 10,
    marginBottom: 10,
  },
  active: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: AppColor.PRIMARY,
    marginRight: 10,
    marginBottom: 10,
  },
});
