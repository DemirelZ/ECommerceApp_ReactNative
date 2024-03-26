import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/TabNavigator';
import StackNavigator from './src/router/StackNavigator';
import Provider from './src/context/provider';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
