import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles/screenStyle';

const Screen: React.FC<{}> = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../public/assets/brand.png')}
        style={styles.img}
      />
    </View>
  );
};

export default Screen;
