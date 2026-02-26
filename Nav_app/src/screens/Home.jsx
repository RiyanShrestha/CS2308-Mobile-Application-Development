import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'

const products = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    price: '₹1,19,900',
    description: 'Apple flagship with A18 chip and advanced camera.',
    image: 'https://idestiny.in/wp-content/uploads/2024/10/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1__en-IN.jpg'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S25 Ultra',
    price: '₹1,29,999',
    description: '200MP camera and powerful Snapdragon processor.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf'
  },
  {
    id: '3',
    name: 'Google Pixel 10 Pro XL',
    price: '₹1,24,999',
    description: 'Best display, camera, and AI features.',
    image: 'https://www.cnet.com/a/img/resize/bf232f9cb88884838de4c5350e4dfb78e18a3a28/hub/2025/08/13/e2798fcd-334b-4d06-8c61-f65eb9b57f1e/google-pixel-10-pro-xl-review-cnet-lanxon-21.jpg?auto=webp&fit=crop&height=675&width=1200'
  },
  {
    id: '4',
    name: 'OnePlus 15',
    price: '₹72,999',
    description: 'Latest flagship with powerful Snapdragon processor.',
    image: 'https://st.gsmarena.com/imgroot/news/25/09/oneplus-15-global/inline/-1200/gsmarena_001.jpg'
  },
  {
    id: '5',
    name: 'Xiaomi 15 Ultra',
    price: '₹1,09,999',
    description: 'Premium camera and powerful hardware.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFZzjW7EqzXgLEMnLojFqcxuW_xTCycaJhA&s'
  },
  {
    id: '6',
    name: 'iPhone 17',
    price: '₹1,29,900',
    description: 'Latest Apple smartphone with improved performance.',
    image: 'https://www.mobileana.com/wp-content/uploads/2024/09/Apple-iPhone-17-Pro-Deep-Blue.webp'
  },
  {
    id: '7',
    name: 'Google Pixel 10 Pro XL',
    price: '₹1,24,999',
    description: 'Best display, camera, and AI features.',
    image: 'https://cdn.mos.cms.futurecdn.net/KXqaiSix2JfjJLxiU6WLx9.jpg'
  },
  {
    id: '8',
    name: 'OnePlus 15',
    price: '₹72,999',
    description: 'Latest flagship with powerful Snapdragon processor.',
    image: 'https://images.financialexpressdigital.com/2025/11/OnePlus-15-1.jpg'
  }
]

const Home = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.view}>View Details →</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Store 🛒</Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 200
  },

  info: {
    padding: 15
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5
  },

  view: {
    marginTop: 10,
    color: '#2196F3',
    fontWeight: 'bold'
  }
})