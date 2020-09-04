import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nome, setNome] = useState('');

  function handlesubmit(){
    const alt = altura/100;
    const imc = peso/ (alt * alt);
    
    if(imc < 18.6){
      alert(`${nome},Você está abaixo do peso${imc.toFixed(2)}`);
    }else if(imc >= 18.6 && imc <24.9){
      alert(`Parabéns ${nome}! Peso ideal!${imc.toFixed(2)}`)
    }else if ( imc >= 24.9 && imc < 34.9){
      alert(`${nome} você Levemente acima do peso!${imc.toFixed(2)}`)
    }
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title} >Calcule seu IMC</Text>

      <Text style={styles.paragrafo}>Digite seu nome?</Text>

      <TextInput
      style={styles.input}
      value={nome}
      onChangeText={(nome) => setNome(nome)}
      placeholder="Ex:Richard J. Cruz"
      />


      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder="Peso(kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder="Altura(cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress=
      {handlesubmit}>
      
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',

  },
  title:{
    fontSize:30,
    color:'#000000',
    textAlign:'center',
    marginTop:25
  },
  paragrafo:{
    fontSize:20,
    textAlign:'center',
    marginTop:20,

  },
  input:{
    backgroundColor:'#121212',
    borderRadius:10,
    margin:25,
    padding:15,
    color:'#fff',
    fontSize:30
  },
  button:{
    justifyContent:'center',
    alignItems:"center",
    margin:15,
    backgroundColor:'#41Aef4',
    padding:10,
    borderRadius:10,

  },
  buttonText:{
    color:'#fff',
    fontSize:25,
  }

});
