import {uniqueId} from 'lodash';
import {TouchableOpacity, View, Text, Image} from 'react-native';

interface MenuCardProps {
  setIsAddingQuantity: (value: boolean) => void;
  isAddingQuantity: boolean;
  item: {
    attributes: {
      menu_title: string;
      menu_description: string;
      menu_price: string;
    };
  };
}

const MenuCard = ({
  setIsAddingQuantity,
  isAddingQuantity,
  item,
}: MenuCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => setIsAddingQuantity(!isAddingQuantity)}
      className={`bg-white border p-4 border-gray-200 ${
        isAddingQuantity ? 'border-b-0 ' : null
      }`}
      key={uniqueId()}>
      <View className="flex-row items-center">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1 text-black opacity-75">
            {item.attributes.menu_title}
          </Text>
          <Text className="text-gray-400">
            {item.attributes.menu_description}
          </Text>
          <Text className="text-gray-400">₱ {item.attributes.menu_price}</Text>
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
};
export default MenuCard;
