import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Exercise } from "../data/exercises"

type Props = {
  exercise: Exercise
  onPress: () => void
}

const ExerciseCard = ({ exercise, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image 
          source={{ uri: exercise.image }} 
          style={styles.imageContainer} 
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{exercise.name}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{exercise.muscle}</Text>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    // Subtle shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#2A2A2A', // Placeholder color while loading
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#A0A0A0',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  arrowContainer: {
    paddingLeft: 10,
  },
  arrow: {
    color: '#E2F163',
    fontSize: 24,
    fontWeight: '300',
  }
})

export default ExerciseCard