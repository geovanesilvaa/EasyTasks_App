import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import TaskItem from '../../components/TaskItem';

export default function Sobre() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState('');

  // 🔹 Carregar tarefas salvas no AsyncStorage ao iniciar o app
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@tasks');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log('Erro ao carregar as tarefas:', error);
    }
  };

  // 🔹 Adicionar nova tarefa e salvar no AsyncStorage
  const addTask = async () => {
    if (task === '') {
      Alert.alert('Ops!', 'Por favor, adicione uma tarefa!');
      return;
    }

    if (task.trim() === '') return;

    try {
      const newData = [...data, task];
      setData(newData);
      setTask('');
      await AsyncStorage.setItem('@tasks', JSON.stringify(newData));
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível adicionar a tarefa.');
      console.log(error);
    }
  };

  // 🔹 Excluir tarefa com confirmação + persistência
  const deleteTask = itemToDelete => {
    Alert.alert('Excluir tarefa!', 'Deseja realmente excluir esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        onPress: async () => {
          try {
            const updatedData = data.filter(item => item !== itemToDelete);
            setData(updatedData);
            await AsyncStorage.setItem('@tasks', JSON.stringify(updatedData));
            Alert.alert('Sucesso!', 'A tarefa foi removida.');
          } catch (error) {
            Alert.alert('Erro!', 'Não foi possível excluir a tarefa.');
            console.log(error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira uma Task"
          value={task}
          onChangeText={texto => setTask(texto)}
        />
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Feather name="check" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, width: '95%', marginLeft: 10 }}>
        <Text style={styles.title}>Lista de Tasks:</Text>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TaskItem item={item} onDelete={() => deleteTask(item)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
