import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native';
import {books} from './data';
import { theme } from '../constants/theme';

const BookDetails = ()=> {
    const {height: windowHeight} = useWindowDimensions();
    const book = books[0];
    const { title, authors, description, images, prices} = book;
    const authorsString = authors.join(',');

   return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.authors}>by {authorsString}</Text>
        <Image source={{uri: images[0]}} style={{width: '100%', height: windowHeight*0.7}} resizeMode='contain'/>
        <View style={styles.bookTypeGroup}>
            {
            prices.map((p)=> <TouchableOpacity key={p.type} style={styles.bookTypeButton}>
                <Text style={styles.bookType}>{p.type}</Text>
                <Text>$ {p.price}</Text>
                </TouchableOpacity>)
            }
        </View>
        <TouchableOpacity style={styles.addToCartBtn}><Text style={styles.addToCartText}>Add to cart</Text></TouchableOpacity>
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
        borderWidth: 1,
        alignItems:"center",
        flexGrow: 1,
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