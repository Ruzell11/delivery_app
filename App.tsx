import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './modules/HomeScreen';
import RestaurantScreen from './modules/RestaurantScreen';
import CategoriesScreen from './modules/CategoriesScreen';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Category" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
