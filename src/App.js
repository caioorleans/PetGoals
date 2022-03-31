import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import LoginPage from './views/LoginPage'

export default () => {
  return (
   <SafeAreaView style={styles.container}>
     <LoginPage/>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
});
