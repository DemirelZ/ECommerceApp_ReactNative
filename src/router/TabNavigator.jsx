import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CART, CATEGORIES, FAVOURITE, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home3, ShoppingCart} from 'iconsax-react-native';
import TabIcon from '../components/router/TabIcon';
import {AppColor} from '../theme/colors';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            size={size}
            focused={focused}
            color={color}
            name={route.name}
            route={route}
          />
        ),

        headerRight: () => (
          <HeaderTabRight/>
        ),

        tabBarActiveTintColor: AppColor.PRIMARY,
        tabBarInactiveTintColor: AppColor.SECONDARY,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVOURITE} component={Favourites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
