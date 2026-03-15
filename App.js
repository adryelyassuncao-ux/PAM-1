import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import{View,Image,StyleSheet,ScrollView} from 'react-native';

export default function App() {
  const size_icons = 38
  const color_icons = "#fff"
  return (

    //inicio foto de perfil
    <View style={estilos.container}>
         <View style={estilos.card}>
           <Image
             style={estilos.imagem}
             source="https://img.icons8.com/doodle/1200/bart-simpson.jpg"        
          />
      </View>

    {/*informaçoes do usuario */}
      <View style={estilos.infos}>
        <View style={estilos.social}>
           <FontAwesome5 name="facebook" size={size_icons} color= {color_icons}/>
           <FontAwesome5 name="instagram"size={size_icons} color= {color_icons}/>
           <FontAwesome5 name="whatsapp" size={size_icons} color= {color_icons}/>
           <FontAwesome5 name="github"   size={size_icons} color= {color_icons}/>
           <FontAwesome5 name="tiktok"   size={size_icons} color= {color_icons}/>
        </View>
      </View>

      
      {/* fotos do usuario c5c5c5ff */}
      <View style={estilos.fotos}>
        <Image
        style={estilos.retrato}
        source={require('./imagem/retrato.png')}
       />
       <Image
       style={estilos.retrato}
       source={require('./imagem/images.jpeg')}
       />
       <Image
       style={estilos.retrato}
       source={require('./imagem/simpsons-capa.webp')}
       />
        <Image
       style={estilos.retrato}
       source={require('./imagem/os-simpsons-2007.avif')}
       />
      </View>
       

    </View>
     
  );
}

const estilos = StyleSheet.create({
  container:{
    width:100,
    flex:1,
    backgroundColor: 'rgb(0, 0, 0)',
    alignItems: 'center',
    paddingTop: 10,
  
  },
  card:{
    width: 250,
    height: 250,
    borderColor: '#c5c5c5ff',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding:10,
    zIndex:1
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  infos:{
    width: '90%',
    backgroundColor: '#807e7e',
    marginTop: -125,
    zIndex: 0
  },
  social:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 125,
  padding:20
  },
  fotos:{
  alignItems: 'flex-start',
  flexDirection: 'row',
  flexWrap:'wrap',
  justifyContent:'flex-start',
  width:"90%",
  gap:3,
  padding:3
  },
  retrato:{
  flexGrow:1,
  flexShrink:1,
  objectFit:'cover',
  height:300,
  aspectRatio:1,
  }

});