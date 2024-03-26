import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import StoreContext from '../../context'
import { screenStyle } from '../../styles/Screenstyle'
import CartCard from '../../components/Cart/cartCard'

const Cart = () => {
  const {cart}=useContext(StoreContext)
  return (
    <View style={screenStyle.container}>

    <FlatList
      data={cart}
      renderItem={({item})=>(<CartCard item={item} />)}
    />
      
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})