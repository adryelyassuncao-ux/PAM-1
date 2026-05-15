import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tela2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DARYL DIXON</Text>
        <Image
            source={require('../../imagem/daryl.jpeg')}
             style={styles.imagem}
        />
      <Text style={styles.text}>Daryl Dixon acompanha Daryl que acorda na França sem saber como chegou lá, em meio a novas ameaças
         e variantes de mortos-vivos.
         Ele passa a proteger um menino chamado Laurent, visto por um grupo religioso como alguém especial para o futuro da
         humanidade.
         Enquanto tenta levá-lo em segurança, Daryl enfrenta facções violentas e busca uma forma de voltar para casa.
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