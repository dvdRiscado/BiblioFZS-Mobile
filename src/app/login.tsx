import { BtnVoltar } from "@/Components/btnVoltar"
import { Button } from "@/Components/button"
import { Input } from "@/Components/input"
import { StyleSheet, Text, View } from "react-native"

export default function Login(){
    return(
        <View style={styles.container}>
            <BtnVoltar></BtnVoltar>
            <View>
                <Text style={styles.titulo}>Bem Vindo!</Text>
                <Text style={styles.subtitulo}>Faça login para continuar</Text> 
            </View>
            <View>
                <Input></Input>
                <Input></Input>
                <Text>Esqueceu a senha?</Text>
            </View>
            <Button text="Entrar >"></Button>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:48,
        gap: 32
    },
    titulo:{
        fontSize: 48,
        color: "#B9030F",
        // fontFamily: "montserrat",
        fontWeight: "bold",
    },
    subtitulo: {
        fontSize: 16,
        color: "#707070",
    },
    
})