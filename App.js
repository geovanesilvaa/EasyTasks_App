import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Bem-vindo ao meu App em Desenvolvimento!</Text>
      <Text style={styles.subtitle}>
        Este é um exemplo básico com React Native + Expo 🚀
      </Text>
    </View>
  );
}

// Estilos do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
  },
});
