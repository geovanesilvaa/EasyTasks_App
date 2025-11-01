import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { TaskItem } from '../../components/TaskItem';
import uuid from 'react-native-uuid';

export default function Sobre() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);

      const storedData = await AsyncStorage.getItem('@tasks');

      if (storedData) {
        setData(JSON.parse(storedData) || []);
      }

      setLoading(false);
    } catch (error) {
      console.log('Erro ao carregar as tarefas:', error);

      setLoading(false);
    }
  }

  async function addTask() {
    if (task === '') {
      Alert.alert('Ops!', 'Por favor, adicione uma tarefa!');
      return;
    }

    const newTaask = {
      id: uuid.v4(),
      text: task,
      status: false,
    };

    try {
      const newData = [...data, newTaask];

      setData(newData);

      setTask('');

      await AsyncStorage.setItem('@tasks', JSON.stringify(newData));
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível adicionar a tarefa.');

      console.log(error);
    }
  }

  async function toggleDone(id) {
    try {
      const updatedData = data.map(item =>
        item.id === id ? { ...item, status: !item.status } : item,
      );

      setData(updatedData);

      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedData));
    } catch (error) {
      console.log('Erro ao atualizar tarefa:', error);
    }
  }

  async function deleteTask(id) {
    Alert.alert('Excluir tarefa!', 'Deseja realmente excluir esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        onPress: async () => {
          try {
            const updatedData = data.filter(item => item.id !== id);

            setData(updatedData);

            await AsyncStorage.setItem('@tasks', JSON.stringify(updatedData));

            Alert.alert('Removida!', 'A tarefa foi excluída.');
          } catch (error) {
            console.log('Erro ao excluir tarefa:', error);
          }
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira uma tarefa..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Feather name="check" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, width: '95%', marginLeft: 10 }}>
        <Text style={styles.title}>Lista de Tarefas:</Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4169e1" />
            <Text style={{ color: '#4169e1', fontSize: 16, marginTop: 10 }}>
              Carregando tarefas...
            </Text>
          </View>
        ) : data.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Feather name="inbox" size={50} color="#000" />
            <Text style={{ color: '#000', marginTop: 10, fontSize: 18 }}>
              Nenhuma tarefa adicionada ainda.
            </Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TaskItem
                item={item}
                onDelete={() => deleteTask(item.id)}
                onToggle={() => toggleDone(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </View>
  );
}
