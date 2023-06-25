import {Text, ScrollView} from 'react-native';
import CategoriesCard from './CategoriesCard';

const CategoriesSection = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing1"
      />
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing2"
      />
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing3"
      />
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing3"
      />
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing3"
      />
      <CategoriesCard
        imageUrl={'https://links.papareact.com/wru'}
        title="Testing3"
      />
    </ScrollView>
  );
};

export default CategoriesSection;
