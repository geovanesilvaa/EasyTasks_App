import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#4169e1" barStyle="light-content" />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
