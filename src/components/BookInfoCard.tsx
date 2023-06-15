import {TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native';
import {theme} from '../constants/theme';
import { Book } from '../types/book';

type Props = {
    item: Book;
}
const BookInfoCard = ({ item}: Props)=> {
    const {title, description, images, prices, authors} = item;
    const getStartingPrice = ()=> {
       const sortedByPrice = [...prices].sort((a, b)=> a.price > b.price ? 1 :-1);
       return sortedByPrice[0].price;
    }
  return (
    <TouchableOpacity style={[styles.cardWrapper]} activeOpacity={0.8}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
        <View style={styles.imageWrapper}>
         <Image source={{uri: images[0]}} style={styles.image} resizeMode='contain'/>
        </View>
        <Text style={styles.title}>Starting from ${getStartingPrice()}</Text>
        <Text>
            {authors.join(',').toString()}
        </Text>
        

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardWrapper:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: theme.colors.surface,
        padding: 20,
        borderColor: theme.colors.grey,
        borderWidth: 1,
        marginBottom: 5,
    },
    imageWrapper: {
        alignItems: 'center'
    },
    title:{
     fontSize: theme.fontSize.large,
     color: theme.colors.text,
    },
    description:{
        marginVertical: 5,
        fontSize: theme.fontSize.medium,
        color: theme.colors.grey,
    },
    image: {
        width: 150,
        height: 200,
        marginVertical: 5,
    }
})
export default BookInfoCard;