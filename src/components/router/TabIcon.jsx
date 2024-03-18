import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES, FAVOURITE, HOME, PROFILE} from '../../utils/routes';
import {Category2, Heart, Home2, Profile} from 'iconsax-react-native';

const TabIcon = ({name, size, color, focused}) => {
  size = 38;
  if (name === HOME) {
    return <Home2 size={focused ? size : '25'} color={color} variant="Bold" />;
  } else if (name === CATEGORIES) {
    return (
      <Category2 size={focused ? size : '25'} color={color} variant="Bold" />
    );
  } else if (name === FAVOURITE) {
    return <Heart size={focused ? size : '25'} color={color} variant="Bold" />;
  } else if (name === PROFILE) {
    return (
      <Profile size={focused ? size : '25'} color={color} variant="Bold" />
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({});
