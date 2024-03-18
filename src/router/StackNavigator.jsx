import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, TAB} from '../utils/routes';
import TabNavigator from './TabNavigator';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
              <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
