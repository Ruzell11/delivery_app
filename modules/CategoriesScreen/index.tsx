import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {uniqueId} from 'lodash';
import {ArrowLeftIcon, StarIcon} from 'react-native-heroicons/outline';
import {baseApiUrl, primaryColor} from '../common/constants';

const CategoriesScreen = () => {
  const {
    params: {restoList, tag},
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  console.log('original:', restoList.data);
  return (
    <ScrollView className="px-4 pt-5 space-y-2">
      <TouchableOpacity onPress={navigation.goBack} className="my-2">
        <ArrowLeftIcon size={22} color={primaryColor} />
      </TouchableOpacity>
      {restoList.data.map(restoDetails => {
        const getImageUrl = () => {
          const uri = restoDetails.attributes.imageRestaurant.data.map(
            item => item.attributes.url,
          );

          return uri;
        };
        const imageUrl = getImageUrl();
        console.log(restoDetails);

        return (
          <TouchableOpacity
            className="bg-white border p-4 border-gray-200 "
            onPress={() =>
              navigation.navigate('Restaurant', {
                featuredCategory: tag,
                title: restoDetails.attributes.title,
                imageUrl: restoDetails.attributes.imageRestaurant.data,
                menu: restoDetails.attributes.menus,
                ratings: restoDetails.attributes.ratings,
                location: restoDetails.attributes.location,
              })
            }>
            <View className="flex-row items-center">
              <View className="flex-1 pr-2">
                <Text className="text-lg mb-1 text-black opacity-75">
                  {restoDetails.attributes.title}
                </Text>
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text> {restoDetails.attributes.ratings}</Text>
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  source={{
                    uri: `${baseApiUrl}${imageUrl[0]}`,
                  }}
                  className="h-20 w-20 bg-gray-300 p-4"
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesScreen;
