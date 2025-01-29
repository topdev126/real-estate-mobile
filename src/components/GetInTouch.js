import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function GetInTouch() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get in Touch</Text>
      <Text style={styles.paragraph}>We’d love to hear from you!</Text>
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Your Email" style={styles.input} />
      <TextInput
        placeholder="Your Message"
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={4}
      />
      <Button title="Send Message" onPress={() => alert('Message Sent!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, padding: 15 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  paragraph: { fontSize: 14, color: '#555', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});
