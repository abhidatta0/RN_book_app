import { FlatList} from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import {books} from './data';
import BookInfoCard from '../components/BookInfoCard';
import { RootStackParamList } from '../types/navigation';

type Props = StackScreenProps<RootStackParamList,'Home'>;

const Home= ({navigation}: Props)=> {
  const navigateToDetail = ()=> {
    navigation.navigate('BookDetail')
  }
  return (
    <FlatList 
    data={books}
    renderItem={({item,})=> <BookInfoCard key={item._id} item={item} onPress={navigateToDetail}/>}
    />
  )
} 

export default Home;