import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#4169e1',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
