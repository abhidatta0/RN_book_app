import { View, Text, StyleSheet, Image } from "react-native";
import Feather  from "react-native-vector-icons/Feather";
import {useDispatch} from 'react-redux';
import { CartItem } from "../types/book";
import { changeQuantity } from "../store/cartSlice";

type Props = {
  cartItem: CartItem;
}
const CartListItem = ({ cartItem }:Props) => {
  const dispatch = useDispatch();
  const {price }  = cartItem;
  const increaseQuantity = () => {
    dispatch(changeQuantity({productId: cartItem.product._id, amount: 1, price }));
  };

  const decreaseQuantity = () => {
    dispatch(changeQuantity({productId: cartItem.product._id, amount: -1, price}));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.images[0] }} style={styles.image} resizeMode="contain"/>
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={2}>{cartItem.product.title}</Text>
        <Text style={styles.size}>Type: {cartItem.price.type}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>Rs. {cartItem.price.price * cartItem.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
    textTransform:'capitalize'
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;