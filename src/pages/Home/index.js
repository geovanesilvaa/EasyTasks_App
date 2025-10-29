import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
}
