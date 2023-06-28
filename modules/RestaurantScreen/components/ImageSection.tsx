import {uniqueId} from 'lodash';
import {ImageUrlProps} from '../../common/types';
import {baseApiUrl, primaryColor} from '../../common/constants';
import {Image, TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const ImageSection = ({imageUrl}) => {
  const navigation = useNavigation();
  return (
    <>
      {imageUrl.map((item: ImageUrlProps) => {
        const imageUrl = `${baseApiUrl}${item.attributes.url}`;

        return (
          <Image
            key={uniqueId()}
            source={{
              uri: imageUrl,
            }}
            alt={item.attributes.name}
            className="h-56 object-contain"
          />
        );
      })}
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-6 left-5 bg-gray-100 p-2 rounded-full">
        <ArrowLeftIcon size={22} color={primaryColor} />
      </TouchableOpacity>
    </>
  );
};

export default ImageSection;
