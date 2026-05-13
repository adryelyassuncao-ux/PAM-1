import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 3 - The Ones Who Live</Text>
      <Text style={styles.text}>Conteúdo da trilogia 3.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
