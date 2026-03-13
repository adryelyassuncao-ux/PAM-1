import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={estilo.container}>
   <View style={estilo.card}>
 <Image
        style={estilo.imagem}
        source="https://pngimg.com/uploads/simpsons/simpsons_PNG16.png"
      />
   </View>
   <View style={estilo.infos}>

   </View>
     

    </View>
  );
}

    const estilo = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:"#58aacaff",
        alignItems: "center",

      },

      imagem: {
        width: 200,
        height: 200,
        borderRadius: "50%",
        borderColor: "#000",
        borderWidth: "50%"
        
      },

      card:{
      width: 80,
      height:80,
      backgroundColor: "#fff",
      borderWidth: 5,       
      borderRadius: "50%",
      borderStyle: 'solid',
      padding: 10
      }
    });





  
      
      



