import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
const MenuSection = ({menu}) => {
  return (
    <>
      <Text className="text-xl font-bold px-4 pb-2 text-black">Menu</Text>
      {menu.data.map(item => {
        return (
          <TouchableOpacity className="bg-white border p-4 border-gray-200 ">
            <View className="flex-row items-center">
              <View className="flex-1 pr-2">
                <Text className="text-lg mb-1 text-black opacity-75">
                  {item.attributes.menu_title}
                </Text>
                <Text className="text-gray-400">
                  {item.attributes.menu_description}
                </Text>
                <Text className="text-gray-400">
                  ₱ {item.attributes.menu_price}
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://tse2.mm.bing.net/th?id=OIP.KoxDguzaHlKCWcVvzpZSfQHaHa&pid=Api&P=0&h=180',
                  }}
                  className="h-20 w-20 bg-gray-300 p-4"
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default MenuSection;
