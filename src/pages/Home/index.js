import React from 'react';
import { View, Text, Pressable } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Easy<Text style={{ color: '#4169e1' }}>Tasks</Text>
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>
        Seu aplicativo de tarefas!
      </Text>
      <Pressable
        style={styles.fabButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Feather name="arrow-right-circle" size={50} color="#4169e1" />
      </Pressable>
    </View>
  );
}
