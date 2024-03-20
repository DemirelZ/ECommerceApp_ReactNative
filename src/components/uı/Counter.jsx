import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import {AppColor} from '../../theme/colors';

const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);

  const inc = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const dec = () => {
    setCount(count + 1);
    onChange(count + 1);
  };

  return (
    <View style={styles.counterWrapper}>
      <TouchableOpacity style={styles.flex} onPress={inc}>
        <MinusCirlce size={30} color={AppColor.BLACK} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 16,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {count}
        </Text>
      </View>
      <TouchableOpacity style={styles.flex} onPress={dec}>
        <AddCircle size={30} color={AppColor.BLACK} variant={'Bold'} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 20,
    backgroundColor: AppColor.SOFTGRAY,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
