import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import HomeScreen from './src/component/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './src/screen/ChatScreen';
import ContactScreen from './src/screen/ContactScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#3b3d3c'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
