
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BtnVoltar } from "../Components/btnVoltar";
import Presenca from "../Components/presenca";

export default function HistoricoQrCode(){
    return(
        <ScrollView>
            <View style={styles.container}>
            <BtnVoltar/>
            <View style={styles.presencaContainer}>
                <Presenca/>
                <Presenca/>
                <Presenca/>
                <Presenca/>
                <TouchableOpacity style={styles.btnVoltar}>
                    <Text style={styles.btnVoltarTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "auto",
        height: "100%",
        margin: 32,
        marginTop:48,
    },
    presencaContainer:{
        gap: 16
    },
    
    btnVoltar:{
        width:"auto",
        height:56,
        backgroundColor: "#B9030F",
        borderRadius:8,
        alignItems: "center",
        justifyContent:"center"
    },
    btnVoltarTexto:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    }

})