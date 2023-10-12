import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import News from './screens/News';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "News",
            headerTitle:"News",
        }}
        />
        <Stack.Screen
          name= "Details"
          component={Details}
          options={{
            title: "Details",
            headerTitle: "Details",
        }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}