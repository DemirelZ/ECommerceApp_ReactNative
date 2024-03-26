import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, PRODUCTDETAIL, PRODUCTSLIST, TAB} from '../utils/routes';
import TabNavigator from './TabNavigator';
import Cart from '../screens/Cart';
import {AppColor} from '../theme/colors';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';

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
    </Stack.Navigator>
  );
}

export default StackNavigator;
