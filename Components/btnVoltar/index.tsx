import { router } from "expo-router"
import { Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

export function BtnVoltar(){
    return(
        <TouchableOpacity 
            activeOpacity={0.3} 
            style={styles.container}
            onPress={() => router.back()}
        >
            <Image source={require('@/assets/images/img/arrow-left.png')}></Image>
            <Text style={styles.texto}>Voltar</Text>
        </TouchableOpacity>
    )
}
