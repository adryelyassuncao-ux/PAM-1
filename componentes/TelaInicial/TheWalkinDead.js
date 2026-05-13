import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Wars: the cronológica</Text>

      <Text style={styles.subtitle}>
        Os principais filmes da franquia estão divididos em trilogias.
      </Text>
      <Text style={styles.text}>
        Clique em uma das telas para ver a ordem de cada trilogia.
      </Text>
  
      <View style={styles.buttonContainer}>
        <Button title="Dead city" onPress={() => props.navigation.navigate('Tela 1')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Daryl" onPress={() => props.navigation.navigate('Tela 2')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="The One Who Live" onPress={() => props.navigation.navigate('Tela 3')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
    width: '100%',
  },
});
