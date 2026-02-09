import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>Hellowwwww Riyannnnnnn!!!</Text>
      <Text style={styles.text}>How are youuuuu!!!!</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s',
        }}
        style={styles.image}
      />

      <Button
        title="Press Me"
        onPress={() => Alert.alert('Button Pressed')}
      />

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert('Touchable Pressed')}
        onLongPress={() =>
          Alert.alert('You long pressed the Touchable!')
        }
      >
        <Text style={styles.touchText}>Touchable Button</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.pressable}
        onPress={() => Alert.alert('Pressable Pressed')}
      >
        <Text style={styles.pressText}>Pressable</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0052cc',
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 15,
    borderRadius: 10,
  },
  touchable: {
    backgroundColor: 'red',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
  },
  touchText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pressable: {
    backgroundColor: '#FFDF00',
    padding: 15,
    marginTop: 15,
    borderRadius: 8,
  },
  pressText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
