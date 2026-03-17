import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '') {
      Alert.alert('Validation Error', 'Please enter your name before submitting.');
      return;
    }
    navigation.navigate('Student', { studentName: name.trim() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Student App</Text>
      <Text style={styles.label}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Riyan Shrestha"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#4A90D9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#555',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4A90D9',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default HomeScreen;
