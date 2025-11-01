import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from '@react-native-vector-icons/feather';

import styles from './styles';

export default function TaskItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>

      <TouchableOpacity onPress={onDelete}>
        <Feather name="trash-2" size={22} color="#d11a2a" />
      </TouchableOpacity>
    </View>
  );
}
