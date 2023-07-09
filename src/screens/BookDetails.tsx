import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView,
     TouchableOpacity, ToastAndroid, Platform, Vibration} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useState} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {useDispatch } from 'react-redux';
import {books} from './data';
import { theme } from '../constants/theme';
import { Price } from '../types/book';
import { HomeTabStackNavParamList } from '../types/navigation';
import { addCartItem as  addCartItemAction} from '../store/cartSlice';

type Props = StackScreenProps<HomeTabStackNavParamList, 'BookDetail'>;
const BookDetails = ({route} : Props)=> {
    const {itemId} = route.params;
    const dispatch = useDispatch();

    const {height: windowHeight} = useWindowDimensions();
    const book = books.find((book)=> book._id === itemId);

    if(!book){
      return null;
    }
    const { title, authors, description, images, prices} = book;
    const authorsString = authors.join(',');

    const [selectedType, setSelectedType ] = useState(prices[0]);

    const addToCart = ()=> {
      ToastAndroid.show('Added to cart', ToastAndroid.BOTTOM);
      Vibration.vibrate(500);
      dispatch(addCartItemAction({price: selectedType, product: book}));
    }
   
    const isSelected= (bookPrice: Price )=> bookPrice.type === selectedType.type;

   return (
    <ScrollView contentContainerStyle={styles.container}>
        <SharedElement id={`title-${book._id}`}>
        <Text style={styles.title}>{title}</Text>
        </SharedElement>
        <Text style={styles.authors}>by {authorsString}</Text>
        <SharedElement id={`image-${book._id}`}>
          <Image source={{uri: images[0]}} style={{width: '100%', height: windowHeight*0.7}} resizeMode='contain'/>
        </SharedElement>
        <View style={styles.bookTypeGroup}>
            {
            prices.map((p)=> <TouchableOpacity key={p.type} 
            style={[styles.bookTypeButton, isSelected(p) ? styles.selectedBookTypeButton: {}]} 
            onPress={()=> setSelectedType(p)}>
                <Text style={[styles.bookType, isSelected(p) ? styles.selectedBookType : {}]}>{p.type}</Text>
                <Text>Rs. {p.price}</Text>
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