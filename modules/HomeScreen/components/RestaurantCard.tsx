import {TouchableOpacity, Image, View, Text} from 'react-native';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {ImageUrlProps, RestaurantCardProps} from '../../common/types';
import {baseApiUrl} from '../../common/constants';
import {uniqueId} from 'lodash';

const RestaurantCard = ({
  title,
  ratings,
  location,
  imageUrl,
  featuredCategory,
  menu,
}: RestaurantCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() =>
        navigation.navigate('Restaurant', {
          featuredCategory: featuredCategory,
          title: title,
          ratings: ratings,
          location: location,
          imageUrl: imageUrl,
          menu: menu,
        })
      }>
      {imageUrl.map((item: ImageUrlProps) => {
        const imageUrl = `${baseApiUrl}${item.attributes.url}`;

        return (
          <Image
            key={uniqueId()}
            source={{
              uri: imageUrl,
            }}
            alt={item.attributes.name}
            className="h-36 w-72 rounded-sm object-contain"
          />
        );
      })}

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-black">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text>{ratings}</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
