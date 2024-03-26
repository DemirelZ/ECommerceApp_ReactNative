import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowCircleRight2} from 'iconsax-react-native';
import {AppColor} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSLIST} from '../../utils/routes';

const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(PRODUCTSLIST, {title:item})}
      style={styles.container}>
      <Text
        style={{textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24}}>
        {item}
      </Text>
      <ArrowCircleRight2 color={AppColor.PRIMARY} size={34} />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: AppColor.SOFTGRAY,
    marginVertical: 8,
    borderRadius: 30,
  },
});
