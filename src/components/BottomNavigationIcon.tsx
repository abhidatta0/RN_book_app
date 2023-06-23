import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
    name: string;
    color: string;
}
const BottomNavigationIcon = ({name, color}:Props)=> {
return <Entypo name={name} color={color} size={25}/>
};

export default BottomNavigationIcon