
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Entypo  from "react-native-vector-icons/Entypo";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import Home from '../screens/Home';
import BookDetails from '../screens/BookDetails';
import { BottomNavParamList,StackNavParamList } from '../types/navigation';
import { theme } from '../constants/theme';
import ShoppingCart from '../screens/ShoppingCart';
import BottomNavigationIcon from '../components/BottomNavigationIcon';
import { selectItems } from '../store/cartSlice';
import { pluralize } from '../utils/strings';

const Stack = createSharedElementStackNavigator<StackNavParamList>();
const BottomTab = createBottomTabNavigator<BottomNavParamList>();

const HomeTab = ()=> (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="BookDetail" component={BookDetails}
    sharedElements={(route)=> [
      {id: `image1-${route.params.itemId}`, animation:'fade',}, 
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
  </Stack.Navigator>
)

const Navigation = ()=> {
   return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={({route})=> ({headerStyle: {backgroundColor:theme.colors.primaryScrim},
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
        <BottomTab.Screen name="CartTab" component={ShoppingCart} options={{title:'Cart'}}/>
      </BottomTab.Navigator>
    </NavigationContainer>
   )
}

export default Navigation;