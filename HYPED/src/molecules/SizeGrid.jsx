import React, { useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SNEAKER_SIZES = ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12', 'US 13'];
const HOODIE_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const ACCESSORY_SIZES = ['One Size', 'Adjustable'];

const SizeGrid = ({ category }) => {

  const [selectedSize, setSelectedSize] = useState(null);

  let displaySizes = SNEAKER_SIZES;

  if (category === 'Hoodies') displaySizes = HOODIE_SIZES;
  if (category === 'Accessories') displaySizes = ACCESSORY_SIZES;

  return (
    <View style={styles.grid}>

      {displaySizes.map((size) => (

        <TouchableOpacity
          key={size}
          activeOpacity={0.8}
          style={[
            styles.box,
            category === 'Accessories'
              ? styles.largeBox
              : styles.standardBox,
            selectedSize === size && styles.selectedBox
          ]}
          onPress={() => setSelectedSize(size)}
        >

          <Text
            style={[
              styles.text,
              selectedSize === size && styles.selectedText
            ]}
          >
            {size}
          </Text>

        </TouchableOpacity>

      ))}

    </View>
  );
};

export default memo(SizeGrid);

const styles = StyleSheet.create({

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    justifyContent: 'space-between'
  },

  box: {
    paddingVertical: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  standardBox: {
    width: '23%'
  },

  largeBox: {
    width: '48%'
  },

  selectedBox: {
    backgroundColor: '#000',
    borderColor: '#000'
  },

  text: {
    color: '#000',
    fontWeight: '600'
  },

  selectedText: {
    color: '#fff'
  }

});