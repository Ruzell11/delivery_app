import React, {useLayoutEffect, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeScreenHeader from './components/HeaderSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedRowSection from './components/FeaturedRowSection';
import {RestoData} from '../common/types';
import {baseApiUrl} from '../common/constants';
import {uniqueId} from 'lodash';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const url = `${baseApiUrl}/api/featureds?populate[restaurants][populate]=*`;
  const [restaurants, setRestaurants] = useState<RestoData[]>([]);
  const fetchRestaurants = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
      });
      const data = await res.json();
      setRestaurants(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-3">
      {/* HEADER */}
      <HomeScreenHeader />
      {/* END */}
      {/* BODY */}
      <ScrollView
        className="bg-gray-100 h-screen"
        contentContainerStyle={{
          paddingBottom: 200,
        }}>
        <CategoriesSection />
        {restaurants?.length < 1 ||
          (restaurants == null && (
            <View className="flex justify-center items-center pt-3">
              <Text>No Featured for now please come back later!.</Text>
            </View>
          ))}
        {restaurants?.map(resto => (
          <FeaturedRowSection
            restaurants={resto.attributes.restaurants.data}
            key={uniqueId()}
            id={resto.attributes.id}
            title={resto.attributes.title}
            featuredCategory={resto.attributes.featuredCategory}
            description={resto.attributes.description}
          />
        ))}
      </ScrollView>
      {/* END */}
    </SafeAreaView>
  );
};

export default HomeScreen;
