import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

function StudentScreen({ route, navigation }) {
  const { studentName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>

      <View style={styles.card}>
        <Text style={styles.nameLabel}>Student Name</Text>
        <Text style={styles.nameValue}>{studentName}</Text>
      </View>

      <Text style={styles.welcome}>Welcome, {studentName}!</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          color="#4A90D9"
        />
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
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nameLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  nameValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90D9',
  },
  welcome: {
    fontSize: 18,
    color: '#444',
    marginBottom: 36,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default StudentScreen;
