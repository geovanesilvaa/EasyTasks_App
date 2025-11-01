import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Pressable onPress={() => navigation.navigate('Sobre')}>
        <Text>Go Home</Text>
      </Pressable>
    </View>
  );
}
