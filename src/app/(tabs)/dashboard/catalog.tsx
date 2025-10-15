import { OpcaoLivro } from '@/src/Components/opcaoLivro';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";

import { useState } from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Catalog() {
  const [opcaoLivro, setOpcaoLivro] = useState('livro')
  
  function liga(val: string){
    setOpcaoLivro(val)
  }

  function goDetalhesLivro (){
    router.navigate('/detalheslivro')
  } 
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.pesquisaContainer}>
          <TextInput style={styles.pesquisaInput} placeholder="Pesquise aqui..."></TextInput>
          <FontAwesome name="search" size={28} color="white" />
        </View>
        <View style={styles.containerOpcao}>
          <OpcaoLivro onPress={()=>liga('livro')} valOn={opcaoLivro} valor={'livro'}>Livros</OpcaoLivro>
          <OpcaoLivro onPress={()=>liga('dvds')} valOn={opcaoLivro} valor={'dvds'}>Dvd's</OpcaoLivro>
          <OpcaoLivro onPress={()=>liga('monografias')} valOn={opcaoLivro} valor={'monografias'}>Monografias</OpcaoLivro>
          
        </View>
        <View style={styles.livroBackgroundContainer}>
          <View style={styles.livroBackground}>
            <Image source={require('@/assets/images/img/livro1.png')} style={{width:"90%", height: "90%", borderRadius: 24}}></Image>
          </View>
        </View>
        <View style={styles.opcaoLivroContainer}>
          <TouchableOpacity activeOpacity={0.4} style={styles.opcaoLivroOff} onPress={goDetalhesLivro}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.opcaoLivroOn}>
            <MaterialCommunityIcons name="arrow-right-top" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.opcaoLivroOff} >
            <Feather name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* isso daqui é só pra nav nn ficar na frente das opcoes do livro */}
        <View style={styles.opcaoLivroContainer}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer:{
    marginTop: 48,
    height:"100%",
    
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  pesquisaContainer:{
    backgroundColor: "#000",
    width: 356,
    height: 54,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center"
    
  },
  pesquisaInput:{
    backgroundColor: "rgba(0,0,0,0)",
    color:"#fff",
    width: "80%",
    marginLeft:16,
    fontSize: 20,
  },
  
  containerOpcao:{
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
    padding:26,
    
  },
  livroBackgroundContainer:{
    justifyContent:"center",
    alignItems: "center"
  },
  livroBackground:{
    backgroundColor:"#000",
    borderRadius:32,
    width: 332,
    height: 538,
    alignItems: "center",
    justifyContent: "center",
  },

  opcaoLivroContainer:{
    flexDirection:"row",
    gap: 36,
    alignItems:"center",
    justifyContent: "center",
    margin: 36,
    height:50
  },
  opcaoLivroOff:{
    backgroundColor: "#E1E3DB",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  opcaoLivroOn:{
    backgroundColor: "#B9030F",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  }

});
