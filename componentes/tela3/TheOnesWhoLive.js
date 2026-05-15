import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> THE ONES WHO LIVE</Text>
      <Image
        source={require('../../imagem/theone.jpeg')}
        style={styles.imagem}
              
       />
      <Text style={styles.text}>The Ones Who Live acompanha o reencontro de Rick Grimes e Michonne após anos separados.
         Rick vive sob o controle da poderosa organização **Civic Republic Military**, enquanto Michonne cruza longas 
         distâncias para encontrá-lo.
         A série mostra a luta dos dois para ficarem juntos novamente em meio a um sistema opressor e cheio de segredos.
</Text>
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