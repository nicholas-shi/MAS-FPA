import React from 'react';
import { StyleSheet } from 'react-native';

// import Routes from './Router';
import TaskView from './pages/TaskView/index';

export default function App() {
  return (
    <React.Fragment>
      <TaskView />
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
