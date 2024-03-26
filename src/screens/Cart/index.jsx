import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import StoreContext from '../../context';
import {screenStyle} from '../../styles/Screenstyle';
import CartCard from '../../components/Cart/cartCard';
import Summary from '../../components/Cart/summary';
import Loading from '../../components/uı/Loading';

const Cart = () => {
  const {cart, sum} = useContext(StoreContext);


  useEffect(() => {
    sum()
    
   
  }, []);
  return (
    <View style={screenStyle.container}>
      {cart.length === 0 ? (
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            paddingTop: '50%',
            fontSize: 30,
            fontWeight: '600',
          }}>
          Sepetiniz Boş
        </Text>
      ) : !cart ? (
        <Loading />
      ) : (
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CartCard item={item} />}
          keyExtractor={item => `${item.id}`}
        />
      )}
      <Summary/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
