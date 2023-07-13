import React, {useState} from 'react';
import {Text, View} from 'react-native';

import MenuCard from './MenuCard';
import AddQuantity from './AddQuantiy';

interface MenuSectionProps {
  menu: {
    data: {
      id: number;
      attributes: {
        menu_title: string;
        menu_description: string;
        menu_price: string;
      };
    }[];
  };
}

const MenuSection = ({menu}: MenuSectionProps) => {
  const [isAddingQuantity, setIsAddingQuantity] = useState(false);

  return (
    <View className="pb-36">
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 4,
          paddingBottom: 2,
          color: 'black',
        }}>
        Menu
      </Text>
      {menu.data.map((item, index) => (
        <React.Fragment key={index}>
          <MenuCard
            item={item}
            setIsAddingQuantity={setIsAddingQuantity}
            isAddingQuantity={isAddingQuantity}
          />
          {isAddingQuantity && <AddQuantity item={item} />}
        </React.Fragment>
      ))}
    </View>
  );
};

export default MenuSection;
