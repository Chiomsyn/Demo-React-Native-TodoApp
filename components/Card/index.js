import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Card = ({taskName, description}) => {
  const [isClicked, setIsClicked] = useState(false);

  const backgroundStyle = {
    backgroundColor: isClicked ? 'red' : null,
    borderRadius: 10,
    borderColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 20,
    height: 20,
  };

  return (
    <View style={backgroundStyle}>
      <View>
        <Text>Complete {taskName}</Text>
        <Text>{description}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Card;
