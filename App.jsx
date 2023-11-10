/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

// Import the ToDoList and ToDoForm components
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Replace the hard-coded list with the ToDoList component */}
      <ToDoList />
      {/* Replace the hard-coded form with the ToDoForm component */}
      <ToDoForm />
    </SafeAreaView>
  );
}

// Add container style for SafeAreaView
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
