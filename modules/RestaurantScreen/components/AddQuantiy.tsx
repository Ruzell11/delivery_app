import {View, Text, TouchableOpacity} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {primaryColor} from '../../common/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeToBasket,
  selectSpecificItems,
} from '../../common/store/basket';
import {RootState} from '../../common/store';

interface AddQuantityProps {
  item: {
    id: number;
    attributes: {
      menu_title: string;
      menu_description: string;
      menu_price: string;
    };
  };
}

const AddQuantity = ({item}: AddQuantityProps) => {
  const itemsInTheBasket = useSelector((state: RootState) =>
    selectSpecificItems(state, item.id),
  );
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        menu_name: item.attributes.menu_title,
        menu_price: item.attributes.menu_price,
        menu_description: item.attributes.menu_description,
        id: item.id,
      }),
    );
  };

  const removeItemsFromBasket = () => {
    if (itemsInTheBasket.length < 1) return;
    dispatch(removeToBasket({id: item.id}));
  };

  return (
    <View className="bg-white px-4 pb-3">
      <View className="flex-row space-x-2 items-center">
        <TouchableOpacity onPress={removeItemsFromBasket}>
          <MinusCircleIcon
            size={35}
            color={itemsInTheBasket.length < 1 ? 'gray' : primaryColor}
          />
        </TouchableOpacity>
        <Text>{itemsInTheBasket.length}</Text>
        <TouchableOpacity onPress={addItemToBasket}>
          <PlusCircleIcon size={35} color={primaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddQuantity;
