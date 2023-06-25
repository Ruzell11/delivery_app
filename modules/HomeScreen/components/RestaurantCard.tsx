import {TouchableOpacity, Image, View, Text} from 'react-native';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon, Mark} from 'react-native-heroicons/outline';

interface RestaurantCardProps {
  title: string;
  ratings: string;
  location: string;
}

const RestaurantCard = ({title, ratings, location}: RestaurantCardProps) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        className="h-36 w-72 rounded-sm object-contain"
      />
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
