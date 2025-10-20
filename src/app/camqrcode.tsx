import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QrCode(){
    function goHistoricoCam(){
        router.push("/historicoqrcode")
    }
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/img/qrcode.png')}></Image>
            <TouchableOpacity style={styles.botao} >
                <MaterialCommunityIcons name="border-radius" size={24} color="white" />
                <Text style={styles.textoBotao}>Ler QR Code</Text>
            </TouchableOpacity> 
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.itemContainer}>
                    <MaterialCommunityIcons name="qrcode-scan" size={32} color="white" />
                    <Text style={styles.textoItem}>Câmera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer} onPress={goHistoricoCam}>
                    <FontAwesome5 name="history" size={28} color="white" />
                    <Text style={styles.textoItem}>Histórico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#101010",
        width:"100%",
        height:"100%",
        alignItems: "center",
        justifyContent:"center",
        gap: 32

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
    
    },
    textoBotao:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },
    navContainer:{
        backgroundColor:"#333333",
        width: 356,
        height: 100,
        borderRadius: 8,
        flexDirection: "row",
        alignContent: "center",
        justifyContent:"center",
        gap:84
    },
    itemContainer:{
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    textoItem:{
        color: "#fff",
        fontSize:16
        
    }
    
})