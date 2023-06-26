import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectItems, selectSubTotal, selectDeliveryPrice, selectTotalPrice, clearCart } from '../store/cartSlice';
import CartListItem from '../components/CartListItem';
import { pluralize } from '../utils/strings';
import { theme } from '../constants/theme';
import EmptyShoppingCart from '../components/EmptyShoppingCart';
import { ShoppingCartScreenProps } from "../types/navigation";

const ShopppingCartTotals = () => {
    const subTotal = useSelector(selectSubTotal);
    const deliveryPrice = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotalPrice);

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>Rs. {subTotal}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>Rs. {deliveryPrice}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>Rs. {total}</Text>
            </View>
        </View>
    )
}

const BuyComponent = ()=> {
    const dispatch = useDispatch();

    const navigation = useNavigation<ShoppingCartScreenProps>();
    const cartItems = useSelector(selectItems);
    const cartItemCountString = pluralize('item', cartItems.length);

    const addToCart = () => {
        dispatch(clearCart()); // clear so that cart becomes empty
        navigation.navigate('OrderSuccess');
    }

   return <View style={{backgroundColor: theme.colors.surface}}>
    <Pressable style={styles.button} onPress={addToCart}>
<Text style={styles.buttonText}>Proceed to Buy ({cartItems.length} {cartItemCountString})</Text>
</Pressable>
</View>
};

const ShoppingCart = () => {
    const cartItems = useSelector(selectItems);

    if(cartItems.length === 0){
        return <EmptyShoppingCart />;
    }
    
    return <>
    <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShopppingCartTotals}
        ListHeaderComponent={BuyComponent}
        stickyHeaderIndices={[0]} // to make ListHeaderComponent as sticky
    />

    

    </>
}

export default ShoppingCart;

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 20,
        borderColor: 'lightgrey',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'grey',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        backgroundColor: theme.colors.text,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        marginVertical: 10,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.surface,
        fontWeight: '500',
        fontSize: 16
    }
})