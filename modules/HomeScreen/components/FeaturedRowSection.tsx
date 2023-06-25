import {View, Text, ScrollView} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
interface FeaturedRowSectionProps {
  title: string;
  featuredCategory: string;
  description: string;
  id: string;
}
const FeaturedRowSection = ({
  id,
  title,
  featuredCategory,
  description,
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
          paddingHorizontal: 15,
        }}
        className="pt-4">
        <RestaurantCard
          title="My Restaurant"
          ratings={'4.5'}
          location="China"
        />
        <RestaurantCard
          title="My Restaurant"
          ratings={'4.5'}
          location="Philippines"
        />
        <RestaurantCard
          title="My Restaurant"
          ratings={'4.5'}
          location="China"
        />
        <RestaurantCard
          title="My Restaurant"
          ratings={'4.5'}
          location="China"
        />
      </ScrollView>
    </View>
  );
};
export default FeaturedRowSection;
