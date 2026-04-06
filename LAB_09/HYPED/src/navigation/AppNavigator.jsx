import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 16
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#ffffff'
        }
      }}
    >
      
      {/* Feed Screen */}
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false
        }}
      />

      {/* Product Detail Screen */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'DROP DETAILS',
          headerBackTitleVisible: false
        }}
      />

    </Stack.Navigator>
  );
}