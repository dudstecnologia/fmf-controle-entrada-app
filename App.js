import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00796B',
    background: '#fff',
    text: '#00796B'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={ Login } options={{ headerShown: false }} />
        <Stack.Screen name="register" component={ Register } options={{ title: 'Registro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
