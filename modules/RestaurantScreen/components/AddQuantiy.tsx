import {View, Text} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {primaryColor} from '../../common/constants';

interface AddQuantityProps {
  quantity: number;
  setQuantity: (prev: number | ((prev: number) => number)) => void;
}

const AddQuantity = ({quantity, setQuantity}: AddQuantityProps) => {
  const addQuantity = () => setQuantity(prev => prev + 1);
  const minusQuantiy = () =>
    quantity > 0 ? setQuantity(prev => prev - 1) : null;
  return (
    <View className="bg-white px-4 pb-3">
      <View className="flex-row space-x-2 items-center">
        <MinusCircleIcon
          size={30}
          color={primaryColor}
          onPress={minusQuantiy}
        />
        <Text>{quantity}</Text>
        <PlusCircleIcon size={30} color={primaryColor} onPress={addQuantity} />
      </View>
    </View>
  );
};

export default AddQuantity;
