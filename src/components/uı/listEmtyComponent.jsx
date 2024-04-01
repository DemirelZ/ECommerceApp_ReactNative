import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListEmtyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, fontWeight:'bold'}}>Favorilerinizde henüz bir ürün yoktur</Text>
    </View>
  );
};

export default ListEmtyComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
