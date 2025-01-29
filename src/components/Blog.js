import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Blog() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Blog Posts</Text>
      <Text style={styles.paragraph}>
        Stay updated with our latest insights and tips in the real estate industry.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, padding: 15 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  paragraph: { fontSize: 14, color: '#555' },
});
