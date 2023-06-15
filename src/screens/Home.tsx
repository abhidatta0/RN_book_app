import { FlatList} from 'react-native';
import {books} from './data';
import BookInfoCard from '../components/BookInfoCard';

const Home= ()=> {
  return (
    <FlatList 
    data={books}
    renderItem={({item,})=> <BookInfoCard key={item._id} item={item}/>}
    />
  )
} 

export default Home;