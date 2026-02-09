import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Name */}
      <Text style={styles.name}>Riyan Shrestha</Text>

      {/* Profile Image */}
      <Image
        source={require('./assets/profile.jpg')}
        style={styles.image}
      />

      {/* Resume Details */}
      <Text style={styles.text}>Course: BCA</Text>
      <Text style={styles.text}>College: R.V University</Text>
      <Text style={[styles.text, { marginBottom: 20 }]}>
        Skills: React Native, Java, Python
      </Text>

      {/* Button */}
      <Button
        title="Contact Me"
        onPress={() =>
          Alert.alert('Email', 'riyanshresthabca24@rvu.edu.in')
        }
      />

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1a2f',
    alignItems: 'center',
    paddingTop: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
});
