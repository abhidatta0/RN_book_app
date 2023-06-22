import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import BookDetails from './src/screens/BookDetails';
import { RootStackParamList } from './src/types/navigation';
import { theme } from './src/constants/theme';

const Stack = createStackNavigator<RootStackParamList>();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor:theme.colors.primaryScrim}}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetail" component={BookDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;