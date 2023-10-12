import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={ Login } options={{ headerShown: false }} />
        <Stack.Screen name="register" component={ Register } options={{ title: 'Registro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
