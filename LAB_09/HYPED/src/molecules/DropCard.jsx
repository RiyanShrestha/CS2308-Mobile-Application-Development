import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DropCard = ({ item, isHero, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isHero ? styles.heroContainer : styles.gridContainer
      ]}
      onPress={() => onPress(item)}
      activeOpacity={0.9}
    >

      <View style={styles.imageWrapper}>

        <Image
          source={{ uri: item.image }}
          style={[styles.image, isHero && styles.heroImage]}
          resizeMode="cover"
        />

        {/* Price Tag */}
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

      </View>

      <Text style={styles.title} numberOfLines={2}>
        {item.name}
      </Text>

      <Text style={styles.brand}>
        {item.brand}
      </Text>

    </TouchableOpacity>
  );
};

export default memo(DropCard);

const styles = StyleSheet.create({

  container: {
    marginBottom: 25
  },

  gridContainer: {
    width: (width / 2) - 22
  },

  heroContainer: {
    width: width - 30
  },

  imageWrapper: {
    position: 'relative',
    marginBottom: 12
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    backgroundColor: '#f0f0f0'
  },

  heroImage: {
    height: 280
  },

  priceTag: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },

  priceText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 13
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4
  },

  brand: {
    fontSize: 13,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  }

});