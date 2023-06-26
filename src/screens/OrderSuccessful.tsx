import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {View, Text, StyleSheet} from 'react-native';
import { OrderSuccessScreenProps } from '../types/navigation';
import { theme } from '../constants/theme';

const OrderSuccessful = ()=> {
    const navigation = useNavigation<OrderSuccessScreenProps>();

   const getDeliveryDate = ()=>  { 
    const currentDate = new Date();
    const advanceByDays = 2;  // 2 days from current date
    currentDate.setDate(currentDate.getDate() + advanceByDays);
    const dateString = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
    return dateString;
  }

  const onClosePress  = ()=> {
    navigation.navigate('HomeTab', {
        screen:'Home'
    });
  }

   return (
    <View style={styles.container}>
        <EntypoIcons name="cross" style={styles.close} size={30} onPress={onClosePress}/>

        <MaterialCommunityIcons name="check-circle-outline" size={80}/>
        <Text style={styles.successText}>Order Placed!</Text>
        <Text style={styles.subText}>Your order was placed successfully.It will be delivered
        by {getDeliveryDate()}
        </Text>
    </View>
   )
}

const styles  = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent:'center',
       alignItems: 'center',
       backgroundColor: theme.colors.primaryScrim,
    },
    successText:{
        color: theme.colors.text,
        fontSize: theme.fontSize.xxl,
        fontWeight: '500'
    },
    subText: {
        maxWidth: '70%',
        textAlign:'center'
    },
    close:{
        position: 'absolute',
        top: 10,
        right: 10,
    }
})

export default OrderSuccessful;