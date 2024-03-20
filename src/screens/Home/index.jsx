import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widgets} from '../../widgets';
import {screenStyle} from '../../styles/Screenstyle';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShown && item.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
