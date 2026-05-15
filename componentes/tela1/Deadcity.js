import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEAD CITY</Text>
      
       <Image
                source={require('../../imagem/deadcity.jpeg')}
                style={styles.imagem}
              />
      <Text style={styles.text}>Dead City mostra Maggie Greene buscando a ajuda de Negan Smith após o sequestro de seu filho
         em uma Manhattan isolada e dominada por ameaças.
         Eles atravessam a cidade enfrentando mortos-vivos e grupos violentos, enquanto lidam com o peso do passado entre eles.
         O sequestro envolve The Croat e a líder The Dama, ligando o plano diretamente ao passado de Negan.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#ffffff'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f5eeee'
  },
   imagem: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});