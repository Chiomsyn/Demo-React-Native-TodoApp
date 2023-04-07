import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Home />;
};

export default App;
