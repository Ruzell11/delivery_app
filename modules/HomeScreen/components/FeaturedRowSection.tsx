import {View, Text, ScrollView} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import {FeaturedRowSectionProps} from '../types';

const FeaturedRowSection = ({
  id,
  title,
  featuredCategory,
  description,
  restaurants,
}: FeaturedRowSectionProps) => {
  return (
    <View>
      <View className="flex-row items-center mt-4 justify-between px-4">
        <Text className="font-bold text-lg text-black">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-sm px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        className="pt-4">
        {restaurants.map(card => (
          <RestaurantCard
            imageUrl={card.attributes.imageRestaurant.data}
            key={card.attributes.id}
            title={card.attributes.title}
            ratings={card.attributes.ratings}
            location={card.attributes.location}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default FeaturedRowSection;
