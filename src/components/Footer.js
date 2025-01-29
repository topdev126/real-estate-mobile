import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Pro-2. All Rights Reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  text: {
    color: '#555',
    fontSize: 12,
  },
});
