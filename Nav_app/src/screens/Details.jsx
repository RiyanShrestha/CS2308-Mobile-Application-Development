import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Details({ navigation, route }) {

  const product = route.params?.product;

  return (
    <View style={styles.container}>

      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart', { product })}
      >
        <Text style={styles.buttonText}>Add To Cart 🛒</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#555' }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10
  },

  description: {
    fontSize: 16,
    marginBottom: 20
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});