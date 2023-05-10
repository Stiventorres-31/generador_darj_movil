import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking,Text, TextInput, View, ImageBackground, Alert, SafeAreaView, Button, TouchableOpacity } from 'react-native';

import { useState } from 'react';


export default function App() {


  const imagen = { uri: 'https://i.pinimg.com/originals/f3/6a/22/f36a2238bd9e76b670ce2c8c1c9b1896.jpg' };
  //const hora_tem =''
  const [hora,setHora]=useState("")
  const [prediccion,setPrediccion] = useState("")
  //const operacion=['']
  const handleInputChange = (value) => {
    setHora(value)
  };

  const mostrarMensaje=(prediccion_tem)=>{
    
    setPrediccion(prediccion_tem)
    
    //alert(prediccion)
    // Alert.alert('Bienvenido', 'Te quedan 5 días', [
    //   {
    //     // text: 'Cancel',
    //     // onPress: () => console.log('Cancel Pressed'),
    //     // style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);

  }
  const ExternalLink = ({ url }) => {
    const handlePress = () => {
      Linking.openURL(url);
    };
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.footerPropiedad }>{url}</Text>
      </TouchableOpacity>
    );
  };
  return (
    
    <SafeAreaView style={styles.container}>
       <ImageBackground source={imagen} style={styles.image}>
        <Text style={styles.titulo}>GENERADOR DARK</Text>

        <TextInput
        maxLength={8}
          placeholder='Semilla 1'
          style={styles.inputText}
        //  onChangeText={handleInputChange}
        onChangeText={(horaStr)=>{
          if(horaStr!=''){
            let [horas, minutos, segundos] = horaStr.split(':');
            const horaD= new Date()
            horaD.setHours(parseInt(horas))
            horaD.setMinutes(parseInt(minutos)+1)
            horaD.setSeconds(parseInt(segundos)+33)
            setPrediccion(horaD.toTimeString().split(" ")[0])
            
        }
        }}
        />
        <TextInput
          editable={false}
          placeholder='Predicción'
          value={prediccion}
          style={styles.inputText}
        />
       
       {/* <ButtonGenerar hora={hora} mostrarMensaje={mostrarMensaje}/> */}

       <Text style={styles.footerPropiedad}>Diseñado y desarrollado por Aviator Colombia</Text>
       <Text style={styles.footerPropiedad}>Todos los derechos reservados</Text>
       <ExternalLink  url="https://t.me/GrupoAviatorColombia" />

      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerPropiedad:{
    bottom:-300,
    backgroundColor:'#000',
    padding:5,
    color:'#a1a1a1',
    fontSize:16,
    fontWeight:'bold'
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    top:-100,
    fontSize: 40,
    color: '#181818',
    fontWeight: 'bold',
  },
  inputText: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    // borderWidth:1,
    borderColor: '#000',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    // borderRadius:30,
    backgroundColor: '#fff'
  }

});
