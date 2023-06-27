import {Text, TouchableOpacity, Image} from 'react-native';

interface CategoriesCardProps {
  imageUrl: string;
  title: string;
}
const CategoriesCard = ({imageUrl, title}: CategoriesCardProps) => {
  return (
    <TouchableOpacity className="relative mx-2">
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
