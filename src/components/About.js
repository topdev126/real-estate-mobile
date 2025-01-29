import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Pro-2</Text>
      <Text style={styles.paragraph}>
        Pro-2 is revolutionizing the real estate market by empowering buyers and sellers with transparency, control, and efficiency.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, padding: 15 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  paragraph: { fontSize: 14, color: '#555' },
});
