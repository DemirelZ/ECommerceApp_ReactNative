import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import StoreContext from '../../context';
import ProductCard from '../../components/product/ProductCard';
import { screenStyle } from '../../styles/Screenstyle';
import ListEmtyComponent from '../../components/uı/listEmtyComponent';

const Favourites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {favourites} = useContext(StoreContext);

  console.log(favourites);

  return (
    <View style={screenStyle.container}>
      <FlatList
      ListEmptyComponent={<ListEmtyComponent/>}
      numColumns={2}
        data={favourites}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
