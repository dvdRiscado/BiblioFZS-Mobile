import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QrCode(){
    function goCam(){
        router.navigate('/camqrcode')
    }
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/img/qrcode.png')}></Image>
            <Text style={styles.texto}>Aponte a câmera do seu celular para ler o QR code e confirmar sua presença!</Text>
            <TouchableOpacity style={styles.botao} onPress={goCam}>
                <Text style={styles.textoBotao}>Vamos lá</Text>
                <FontAwesome name="arrow-right" size={24} color="white" />
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#333333",
        width:"100%",
        height:"100%",
        alignItems: "center",
        justifyContent:"center",
        
    },
    texto:{
        color:"#fff",
        margin: 48,
        textAlign: "center",
        fontSize:18
    },
    botao:{
        backgroundColor: "#B9030F",
        width:"80%",
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 16,
        borderRadius:8,
        paddingLeft:28
    },
    textoBotao:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },
    
})