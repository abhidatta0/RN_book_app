
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Entypo  from "react-native-vector-icons/Entypo";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import Home from '../screens/Home';
import BookDetails from '../screens/BookDetails';
import { BottomNavParamList,HomeTabStackNavParamList, CartTabStackNavParamList } from '../types/navigation';
import { theme } from '../constants/theme';
import ShoppingCart from '../screens/ShoppingCart';
import BottomNavigationIcon from '../components/BottomNavigationIcon';
import { selectItems } from '../store/cartSlice';
import { pluralize } from '../utils/strings';
import OrderSuccessful from '../screens/OrderSuccessful';

const HomeTabStack = createSharedElementStackNavigator<HomeTabStackNavParamList>();
const CartTabStack = createSharedElementStackNavigator<CartTabStackNavParamList>();

const BottomTab = createBottomTabNavigator<BottomNavParamList>();

const HomeTab = ()=> (
  <HomeTabStack.Navigator screenOptions={{headerShown: false}}>
    <HomeTabStack.Screen name="Home" component={Home} />
    <HomeTabStack.Screen name="BookDetail" component={BookDetails}
    sharedElements={(route)=> [
      {id: `image-${route.params.itemId}`, animation:'fade',}, 
      {id: `title-${route.params.itemId}`, animation: 'fade-in',}
    ]}
    // options is not of much use in this UI
    // options={()=> ({
    //   cardStyleInterpolator: ({current: {progress}})=> {
    //     return {
    //       cardStyle: {
    //         opacity: progress
    //       }
    //     }
    //   }
    // })}
    />
  </HomeTabStack.Navigator>
)

const CartTab = ()=> (
  <CartTabStack.Navigator screenOptions={{headerShown: false}}>
    <CartTabStack.Screen name="ShoppingCart" component={ShoppingCart} />
    <CartTabStack.Screen name="OrderSuccess" component={OrderSuccessful} />
  </CartTabStack.Navigator>
)

const Navigation = ()=> {
   return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={({route})=> ({headerStyle: {backgroundColor:theme.colors.primaryScrim},
      headerShown: false,
      unmountOnBlur: true,
       tabBarIcon: ({focused})=> {
        const color = focused ? theme.colors.primary : theme.colors.grey;
       if(route.name === 'HomeTab'){
        return <BottomNavigationIcon name="home" color={color} />;
      } else{
        return <BottomNavigationIcon name="shopping-cart" color={color} />;
       }},
       tabBarLabelStyle: {color: theme.colors.secondary }
      })}>
        <BottomTab.Screen name="HomeTab" component={HomeTab} options={{title:'Home'}}/>
        <BottomTab.Screen name="CartTab" component={CartTab} options={{title:'Cart'}}/>
      </BottomTab.Navigator>
    </NavigationContainer>
   )
}

export default Navigation;