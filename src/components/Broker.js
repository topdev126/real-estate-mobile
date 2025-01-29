import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Broker() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meet Our Brokers</Text>
      <Text style={styles.paragraph}>
        Our experienced brokers are here to assist you in navigating the real estate market efficiently.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, padding: 15 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  paragraph: { fontSize: 14, color: '#555' },
});
