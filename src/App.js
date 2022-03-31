import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import ProfilePage from './views/ProfilePage'

export default () => {
  return (
   <SafeAreaView style={styles.container}>
     <ProfilePage/>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
});
