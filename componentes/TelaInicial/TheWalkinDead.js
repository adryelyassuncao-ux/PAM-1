import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaInicial(props) {
  return (
    <SafeAreaView style={styles.continente}>

      <View style={styles.container}>

        <Text style={styles.title}>THE WALKIN DEAD</Text>
        <Text style={styles.title}>SPIN-OFF'S</Text>
        

        <Text style={styles.subtitle}>
          Temos três spin-off principais de The Walkin Dead.
        </Text>

        <Text style={styles.text}>
          Escolha a baixo por qual vai começar.
        </Text>
  
        <View style={styles.buttonContainer}>

          <TouchableOpacity 
            style={styles.botaoPersonalizado} onPress={() => props.navigation.navigate('Tela 1')}>
            <Text style={styles.textoBotao}>Dead City</Text>

          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity 
            style={styles.botaoPersonalizado} onPress={() => props.navigation.navigate('Tela 2')}>
            <Text style={styles.textoBotao}>Daryl Dixon</Text>

          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.botaoPersonalizado} onPress={() => props.navigation.navigate('Tela 3')}>
            <Text style={styles.textoBotao}>The One Who Live</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
  continente: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    padding: 10,
  },
  
  botaoPersonalizado: {
    backgroundColor: '#000000',    
    borderWidth: 2,
    borderColor: '#808080', 
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,  
    
  },
  textoBotao: {
    color: '#808080',    
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  
});