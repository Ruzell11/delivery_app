import {View, Text} from 'react-native';
import {MapPinIcon, TagIcon} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
import {primaryColor} from '../../common/constants';

interface RestaurantDetailsSectionProps {
  title: string;
  location: string;
  ratings: string;
  featuredCategory: string;
}

const RestaurantDetailsSection = ({
  title,
  location,
  ratings,
  featuredCategory,
}: RestaurantDetailsSectionProps) => {
  return (
    <View className="bg-white ">
      <View className="px-4 pt-4 space-y-2">
        <Text className="text-3xl font-bold text-black">{title}</Text>
        <View className="flex-row  space-x- my-1 space-x-5">
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text>{ratings}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon size="22" color="gray" />
            <Text>{location}</Text>
          </View>
          <View className=" flex-row items-cente space-x-1">
            <TagIcon size={22} color="gray" />
            <Text>{featuredCategory}</Text>
          </View>
        </View>
        <Text className="text-gray-500 mt-5 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsSection;
