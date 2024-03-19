import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, TAB} from '../utils/routes';
import TabNavigator from './TabNavigator';
import Cart from '../screens/Cart';
import { AppColor } from '../theme/colors';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible:false,
      headerTintColor:AppColor.BLACK
    }}>
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
