import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.bloco}>
        <Text style={styles.texto}>Mobilia Tietê!</Text> 
      <StatusBar style="auto" />
      </view>
      <view style={styles.bloco}>
        <Text style={styles.texto}>A melhor loja de móveis da região!</Text> 
        
      </view>
        <view style={styles.bloco}>
        <Text style={styles.texto}>A melhor loja de móveis da região!</Text>
        </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#473e3eff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },  
  
  bloco:{
    backgroundColor: 'white',
    padding: 20,
    width: '100%',   
},
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5f4940ff',
  },
});
