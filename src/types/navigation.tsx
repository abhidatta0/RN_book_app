import type { CompositeNavigationProp} from '@react-navigation/native';
import type { BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type { StackNavigationProp} from '@react-navigation/stack';


export type BottomNavParamList = {
    HomeTab: undefined;
    CartTab: undefined,
};

export type StackNavParamList = {
    Home: undefined;
    BookDetail: { itemId: string };
};

export type CartTabScreenProps  = CompositeNavigationProp<
BottomTabNavigationProp<BottomNavParamList, 'CartTab'>,
StackNavigationProp<StackNavParamList>
>;