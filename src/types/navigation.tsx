import type { CompositeNavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import type { BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type { StackNavigationProp} from '@react-navigation/stack';


export type BottomNavParamList = {
    HomeTab: NavigatorScreenParams<HomeTabStackNavParamList>;
    CartTab: NavigatorScreenParams<CartTabStackNavParamList>,
};

export type HomeTabStackNavParamList = {
    Home: undefined;
    BookDetail: { itemId: string };
};

export type CartTabStackNavParamList = {
    ShoppingCart: undefined;
    OrderSuccess: undefined;
}

export type ShoppingCartScreenProps  = CompositeNavigationProp<
StackNavigationProp<CartTabStackNavParamList,'ShoppingCart'>,
BottomTabNavigationProp<BottomNavParamList>
>;

export type OrderSuccessScreenProps  = CompositeNavigationProp<
StackNavigationProp<CartTabStackNavParamList,'OrderSuccess'>,
BottomTabNavigationProp<BottomNavParamList>
>;