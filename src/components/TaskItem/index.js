/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Feather from '@react-native-vector-icons/feather';

import styles from './styles';

export function TaskItem({ item, onDelete, onToggle }) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Feather
          name={item.status ? 'check-circle' : 'circle'}
          size={22}
          color={item.status ? '#4CAF50' : '#ccc'}
        />
        <Text
          style={[
            styles.text,
            item.status && {
              textDecorationLine: 'line-through',
              color: '#999',
            },
          ]}
        >
          {item.text}
        </Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Feather name="trash-2" size={22} color="#d11a2a" />
      </TouchableOpacity>
    </Pressable>
  );
}
