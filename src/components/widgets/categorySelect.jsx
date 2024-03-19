import {FlatList, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL, CATEGORY_URL} from '../../service/urls';
import {AppColor} from '../../theme/colors';
import {CloudFog} from 'iconsax-react-native';

const CategorySelect = ({handleSelect}) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err));
  };

  const selectCategory = category => {
    setSelectedCategory(category);
    handleSelect(category);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={selectedCategory === item ? styles.active : styles.category}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({
  category: {
    padding: 10,
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
