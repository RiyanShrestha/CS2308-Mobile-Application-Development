import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Badge = ({ title, isSelected, onPress }) => (
  <TouchableOpacity
    style={[
      styles.badge,
      isSelected && styles.selectedBadge
    ]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text
      style={[
        styles.text,
        isSelected && styles.selectedText
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default memo(Badge);

const styles = StyleSheet.create({

  badge: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    marginRight: 10
  },

  selectedBadge: {
    backgroundColor: '#000',
    borderColor: '#000'
  },

  text: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600'
  },

  selectedText: {
    color: '#fff'
  }

});