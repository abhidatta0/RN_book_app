import { Text, View, StyleSheet,Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { theme } from "../constants/theme";
import { CartTabScreenProps } from "../types/navigation";

const EmptyShoppingCart = ()=> {
    const navigation = useNavigation<CartTabScreenProps>();
    const onHomePress= ()=> {
      navigation.navigate('Home');
    }
   return (
    <View style={styles.container}>
        <Text style={styles.emptyText}>You shopping cart is empty</Text>
        <Pressable style={styles.button} onPress={onHomePress}>
            <Text style={styles.buttonText}>Go to home</Text>
        </Pressable>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
       padding: 20,
       alignItems: 'center'
    },
    emptyText: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.secondary,
        width: '50%',
        alignSelf: 'center',
        padding: 10,
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

export default EmptyShoppingCart;