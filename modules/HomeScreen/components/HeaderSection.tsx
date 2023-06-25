import {Text, View, Image, TextInput} from 'react-native';
import {ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline';
import SearchSection from './SearchSection';

const HomeScreenHeader = () => {
  return (
    <>
      <View className="flex-row space-x-2  mx-4 ">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 rounded-full p-4 "
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="text-black font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <SearchSection />
    </>
  );
};

export default HomeScreenHeader;
