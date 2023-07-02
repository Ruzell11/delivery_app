import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, Image} from 'react-native';

interface CategoriesCardProps {
  imageUrl: string;
  title: string;
  restoList: object;
}
const CategoriesCard = ({imageUrl, title, restoList}: CategoriesCardProps) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate('Category', {
          restoList,
          tag: title,
        })
      }
      className="relative mx-2">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-20 w-20 rounded "
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
