import {useState} from 'react';
import {uniqueId} from 'lodash';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {primaryColor} from '../../common/constants';
import AddQuantity from './AddQuantiy';
import MenuCard from './MenuCard';
const MenuSection = ({menu}) => {
  const [isAddingQuantity, setIsAddingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Text className="text-xl font-bold px-4 pb-2 text-black">Menu</Text>
      {menu.data.map(item => {
        return (
          <>
            <MenuCard
              item={item}
              setIsAddingQuantity={setIsAddingQuantity}
              isAddingQuantity={isAddingQuantity}
            />
            {isAddingQuantity ? (
              <AddQuantity quantity={quantity} setQuantity={setQuantity} />
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default MenuSection;
