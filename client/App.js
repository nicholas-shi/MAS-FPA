import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './Router';

export default function App() {
  return (
    <React.Fragment>
      <Routes />
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
