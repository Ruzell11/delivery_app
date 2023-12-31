import {Text, ScrollView, View} from 'react-native';
import CategoriesCard from './CategoriesCard';
import {baseApiUrl} from '../../common/constants';
import React, {useEffect, useState} from 'react';
import {uniqueId} from 'lodash';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const url = `${baseApiUrl}/api/categories?populate=category_image&populate=restaurants.imageRestaurant&populate=restaurants.menus`;

  const fetchCategories = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
      });
      const data = await res.json();
      setCategories(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (categories?.length < 1 || categories == null) {
    return (
      <View className="flex justify-center items-center pt-3">
        <Text>No Categories for now please come back later!.</Text>
      </View>
    );
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      {categories.map(category => {
        const getImageUrl = () => {
          const uri = category.attributes.category_image.data.map(
            url => url.attributes.url,
          );

          return uri;
        };

        const imageUrl = getImageUrl();
        return (
          <CategoriesCard
            restoList={category.attributes.restaurants}
            key={uniqueId()}
            imageUrl={`${baseApiUrl}${imageUrl[0]}`}
            title={category.attributes.title}
          />
        );
      })}
    </ScrollView>
  );
};

export default CategoriesSection;
