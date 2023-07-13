import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {basketItemsTotal, selectBasketItems} from '../common/store/basket';
import {useNavigation} from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const MenuBasket = () => {
  const itemsInTheBasket = useSelector(selectBasketItems);
  const totalItemsBasket = useSelector(basketItemsTotal);
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4  rounded-lg flex-row items-center space-x-1 justify-between">
        <Text className="text-white font-bold text-lg bg-[#01A296] py-1 px-2 rounded-md">
          {itemsInTheBasket.length}
        </Text>
        <Text
          className="text-white font-bold text-lg"
          onPress={() => navigation.navigate('Basket')}>
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={parseInt(totalItemsBasket)} currency="PHP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBasket;
