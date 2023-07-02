import {useState} from 'react';
import {uniqueId} from 'lodash';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {primaryColor} from '../../common/constants';
const MenuSection = ({menu}) => {
  const [isAddingQuantity, setIsAddingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const addQuantity = () => setQuantity(prev => prev + 1);
  const minusQuantiy = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      return;
    }

    return;
  };
  return (
    <>
      <Text className="text-xl font-bold px-4 pb-2 text-black">Menu</Text>
      {menu.data.map(item => {
        return (
          <>
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
            {isAddingQuantity ? (
              <View className="bg-white px-4 py-2">
                <View className="flex-row space-x-2 items-center">
                  <MinusCircleIcon
                    size={25}
                    color={primaryColor}
                    onPress={minusQuantiy}
                  />
                  <Text>{quantity}</Text>
                  <PlusCircleIcon
                    size={25}
                    color={primaryColor}
                    onPress={addQuantity}
                  />
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default MenuSection;
