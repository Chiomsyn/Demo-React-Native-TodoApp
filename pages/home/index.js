import React, {useState} from 'react';
import Header from '../../components/general/Header';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const listTab = [
  {
    status: 'starred',
  },
  {
    status: 'other',
  },
  {
    status: 'new list',
  },
];

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [status, setStatus] = useState('starred');
  const setStatusFilter = status => {
    setStatus(status);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={(styles.container, backgroundStyle)}>
      <Header />
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text style={styles.textTab}>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList />
    </SafeAreaView>
  );
};

export default Home;
