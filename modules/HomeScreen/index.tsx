import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeScreenHeader from './components/HeaderSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedRowSection from './components/FeaturedRowSection';
const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();

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
          paddingBottom: 100,
        }}>
        <CategoriesSection />
        <FeaturedRowSection
          id="123"
          title="Featured 1"
          featuredCategory="discount"
          description="This is a description"
        />
        <FeaturedRowSection
          id="1234"
          title="Featured 2"
          featuredCategory="discount"
          description="This is a description"
        />
        <FeaturedRowSection
          id="1236"
          title="Featured 3"
          featuredCategory="discount"
          description="This is a description"
        />
        <FeaturedRowSection
          id="125"
          title="Featured 4"
          featuredCategory="featured"
          description="This is a description"
        />
      </ScrollView>
      {/* END */}
    </SafeAreaView>
  );
};

export default HomeScreen;
