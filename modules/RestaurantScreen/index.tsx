import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useLayoutEffect} from 'react';
const RestaurantScreen = () => {
  const {
    params: {title, ratings, location, imageUrl},
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;
