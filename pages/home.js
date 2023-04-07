import React from 'react';
import Header from '../components/general/Header';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from '../style';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
