import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import logo from '../../assets/logo.jpg';
import { StyleSheet } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Star wars ordem cronologica</Text>
      <Image source={logo} style={styles.Imagem}/>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>
        Você sabe qual é a ordem cronologica da franquia Star Wars?
      </Text>

      <Text style={styles.titulo}>
        Os principais filmes da franquia estão divididos em triologias. Clique no botão
      </Text>
    </View> )

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  
});
}