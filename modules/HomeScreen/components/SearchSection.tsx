import {View, TextInput} from 'react-native';
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
const SearchSection = () => {
  return (
    <View className="flex-row items-center space-x-2 mx-4 pb-2  ">
      <View className="flex-row items-center space-x-2 bg-gray-200 px-2 flex-1">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput placeholder="Search Here" keyboardType="default" />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  );
};

export default SearchSection;
