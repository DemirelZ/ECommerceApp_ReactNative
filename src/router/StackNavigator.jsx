import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CART,
  CHECKOUT,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTSLIST,
  TAB,
} from '../utils/routes';
import TabNavigator from './TabNavigator';
import Cart from '../screens/Cart';
import {AppColor} from '../theme/colors';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';
import Login from '../screens/Login';
import CheckOut from '../screens/CheckOut';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColor.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          title: route?.params?.title,
        })}
        name={PRODUCTSLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={{headerRight: () => <HeaderTabRight />}}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen
        options={{headerRight: () => <HeaderTabRight />}}
        name={LOGIN}
        component={Login}
      />
      <Stack.Screen name={CHECKOUT} component={CheckOut} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
