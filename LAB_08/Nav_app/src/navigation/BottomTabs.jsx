import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Cart') {
            iconName = 'cart'
          } else if (route.name === 'Profile') {
            iconName = 'person'
          }

          return <Icon name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTabs