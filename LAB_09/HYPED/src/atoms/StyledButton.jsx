import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StyledButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    activeOpacity={0.85}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default memo(StyledButton);

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1
  }

});