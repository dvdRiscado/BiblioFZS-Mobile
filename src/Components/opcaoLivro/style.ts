import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({    
  botaoAtivado:{
    backgroundColor:"#B9030F",
    borderRadius:100,
    width: "auto",
    height: 36,
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    paddingVertical:8,
    paddingHorizontal:16,
    fontSize:14  
  },
  botaoDesativado:{
    borderRadius:100,
    width: "auto",
    height: 36,
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    paddingVertical:8,
    paddingHorizontal:16,
    fontSize:14
  },
  textoBotaoAtivado:{
    color: "#FFF",
    fontWeight:"700"
  }
})
