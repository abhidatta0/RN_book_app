import {TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {theme} from '../constants/theme';
import { Book } from '../types/book';

type Props = {
    item: Book;
    onPress: ()=> void;
}
const BookInfoCard = ({ item, onPress}: Props)=> {
    const {title, description, images, prices, authors, _id} = item;
    const getStartingPrice = ()=> {
       const sortedByPrice = [...prices].sort((a, b)=> a.price > b.price ? 1 :-1);
       return sortedByPrice[0].price;
    }
  return (
    <TouchableOpacity style={[styles.cardWrapper]} activeOpacity={0.8} onPress={onPress}>
        <SharedElement id={`title-${_id}`}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </SharedElement>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
        <View style={styles.imageWrapper}>
        <SharedElement id={`image-${_id}`}>
         <Image source={{uri: images[0]}} style={styles.image} resizeMode='contain'/>
         </SharedElement>
        </View>
        <Text style={styles.title}>Starting from Rs.{getStartingPrice()}</Text>
        <Text>
            {authors.join(',').toString()}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardWrapper:{
        shadowColor: theme.colors.text,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: theme.colors.surface,
        padding: 20,
        borderColor: theme.colors.grey,
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