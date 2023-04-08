import React from 'react';
import {Button, View, Text, BackButton} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';
import Profile from './pages/profile';

function LogoTitle({props}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator({
  defaultNavigationOptions: {
    headerTitle: 'COMMS',
    headerTitleStyle: [
      // baseStyles.whiteHeaderText,
      {
        flex: 1,
        textAlign: 'center',
      },
    ],
    headerStyle: {
      backgroundColor: '#ffff',
    },
    headerBackImage: <BackButton />,
    headerBackTitle: null,
    headerTitleContainerStyle: {
      left: 0, // THIS RIGHT HERE
    },
    headerLayoutPreset: 'center',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerTitle: props => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert('This is a button!')}
          //       title="Info"
          //       color="#fff"
          //     />
          //   ),
          //   headerStyle: {
          //     backgroundColor: '#fff',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
