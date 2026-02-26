import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Cart = ({ navigation, route }) => {

  const product = route.params?.product

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Your Cart 🛒</Text>

      {product ? (
        <View style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      ) : (
        <Text>No Product Added</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    elevation: 4
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});