import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView,
     TouchableOpacity, ToastAndroid, Platform, Vibration} from 'react-native';
import {useState} from 'react';
import {books} from './data';
import { theme } from '../constants/theme';
import { Price } from '../types/book';

const BookDetails = ()=> {
    const {height: windowHeight} = useWindowDimensions();
    const book = books[0];
    const { title, authors, description, images, prices} = book;
    const authorsString = authors.join(',');

    const [selectedType, setSelectedType ] = useState(prices[0]);

    const addToCart = ()=> {
      ToastAndroid.show('Added to cart', ToastAndroid.BOTTOM);
      Vibration.vibrate(500);
      console.log({selectedType});
    }
   
    const isSelected= (bookPrice: Price )=> bookPrice.type === selectedType.type;

   return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.authors}>by {authorsString}</Text>
        <Image source={{uri: images[0]}} style={{width: '100%', height: windowHeight*0.7}} resizeMode='contain'/>
        <View style={styles.bookTypeGroup}>
            {
            prices.map((p)=> <TouchableOpacity key={p.type} 
            style={[styles.bookTypeButton, isSelected(p) ? styles.selectedBookTypeButton: {}]} 
            onPress={()=> setSelectedType(p)}>
                <Text style={[styles.bookType, isSelected(p) ? styles.selectedBookType : {}]}>{p.type}</Text>
                <Text>$ {p.price}</Text>
                </TouchableOpacity>)
            }
        </View>
        <TouchableOpacity style={styles.addToCartBtn} onPress={addToCart}><Text style={styles.addToCartText}>Add to cart</Text></TouchableOpacity>
        <Text style={styles.descrHeader}>Description</Text>
        <Text style={styles.descr}>{description}</Text>
    </ScrollView>
   )
}

export default BookDetails;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
     fontSize: theme.fontSize.xxl,
     color: theme.colors.primary,
    },
    authors: {
        fontSize: theme.fontSize.large,
    },
    image: {
        height: 123,
    },
    descrHeader: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
        textDecorationLine: 'underline',
        marginTop: 10,
    },
    descr: {
        fontSize: theme.fontSize.medium,
    },
    bookTypeButton: {
        height: 50,
        width: '50%',
        borderWidth: 2,
        alignItems:"center",
        flexGrow: 1,
    },
    selectedBookTypeButton:{
        borderColor: theme.colors.primary,
    },
    bookTypeGroup: {
        flexDirection:'row', 
        flexWrap: 'wrap',
    },
    bookType: {
       fontSize: theme.fontSize.medium,
       color: theme.colors.text,
       textTransform: 'capitalize',
    },
    selectedBookType: {
        color: theme.colors.primary,
    },
    addToCartBtn: {
        borderWidth: 1,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        borderColor: theme.colors.secondary,
        marginVertical: 10,
    },
    addToCartText:{
        color: theme.colors.secondary,
        fontSize: theme.fontSize.medium,
    }
})