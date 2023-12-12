import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import signup from './screens/signup'

export default function App() {
  const stack=createNativeStackNavigator()
  return (
   <NavigationContainer>
    <stack>
      <stack.Screen name='signup' component={signup}/>
      <stack.Screen name='home' component={homescreen}/>
    </stack>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})