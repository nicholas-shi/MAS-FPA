import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './Router';

// Loading Views
import HomeView  from './pages/Home/index';

export default function App() {
  return (
    <React.Fragment>
      <Router />
      { /* Placeholder to load and test each page individually*/ }
      <HomeView />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
