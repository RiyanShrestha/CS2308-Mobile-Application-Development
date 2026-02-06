import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hello Techies 👋</Text>

      <Image
        source={{
          uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg',
        }}
        style={styles.image}
      />

      <Button
        title="Click Me"
        onPress={() => Alert.alert('Button Clicked')}
      />

      <Pressable
        style={styles.pressable}
        onPress={() => Alert.alert('Pressable Clicked')}
      >
        <Text style={styles.pressText}>Tap Me</Text>
      </Pressable>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  pressable: {
    marginTop: 20,
    backgroundColor: '#38bdf8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  pressText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
