import {FlatList, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import { AppColor } from '../../theme/colors';

const CategorySelect = () => {
  const [category, setCategory] = useState([]);

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err));
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.category}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View >
      <FlatList horizontal data={category} renderItem={renderItem} />
    </View>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({
    category:{
        padding:10,
        borderRadius:100,
        backgroundColor:AppColor.SOFTGRAY,
        marginRight:10,
        marginBottom:10
    }
});
