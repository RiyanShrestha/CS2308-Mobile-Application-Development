import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import Home from './src/screens/Home'
import Details from './src/screens/Details'
import Cart from './src/screens/Cart'
import Profile from './src/screens/Profile'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >

        <Stack.Screen 
          name="Home" 
          component={Home}
          options={({ navigation }) => ({
            title: "My Store",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={{ marginRight: 15 }}
              >
                <Image
                  source={require('./src/assets/profile.jpg')}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            )
          })}
        />

        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{ title: "Product Details" }}
        />

        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={{ title: "Cart" }}
        />

        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={{ title: "My Profile" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff'
  }
})