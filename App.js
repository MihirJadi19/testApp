import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Yup from 'yup';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color:'black'
  // },
});
