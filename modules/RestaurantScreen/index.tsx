import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useLayoutEffect} from 'react';
import {baseApiUrl} from '../common/constants';
import {ImageUrlProps} from '../common/types';
import {uniqueId} from 'lodash';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import ImageSection from './components/ImageSection';
import RestaurantDetailsSection from './components/RestaurantDetailsSection';
import MenuSection from './components/MenuSection';
import MenuBasket from '../MenuBasket';
const RestaurantScreen = () => {
  const {
    params: {title, ratings, location, imageUrl, featuredCategory, menu},
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View className="relative">
          <ImageSection imageUrl={imageUrl} />
          <RestaurantDetailsSection
            featuredCategory={featuredCategory}
            title={title}
            ratings={ratings}
            location={location}
          />
          <MenuSection menu={menu} />
        </View>
      </ScrollView>
      <MenuBasket />
    </>
  );
};

export default RestaurantScreen;
