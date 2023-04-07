import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          flex: 3,
        }}>
        Tasks
      </Text>
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderRadius: 10,
          backgroundColor: 'green',
          textAlign: 'center',
        }}>
        <Text>O</Text>
      </View>
    </View>
  );
};

export default Header;
