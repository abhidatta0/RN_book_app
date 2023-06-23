import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from './src/screens/Home';
import BookDetails from './src/screens/BookDetails';
import { RootStackParamList } from './src/types/navigation';
import { theme } from './src/constants/theme';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor:theme.colors.primaryScrim}}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetail" component={BookDetails}
        sharedElements={(route)=> [
          {id: `image1-${route.params.itemId}`, animation:'fade',}, 
          {id: `title-${route.params.itemId}`, animation: 'fade-in',}
        ]}
        // options is not of much use in this UI
        // options={()=> ({
        //   cardStyleInterpolator: ({current: {progress}})=> {
        //     return {
        //       cardStyle: {
        //         opacity: progress
        //       }
        //     }
        //   }
        // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;