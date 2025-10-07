import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

type props = {
    text: string
}

export function Button({ text }: props){
    return(
        <TouchableOpacity 
            activeOpacity={0.3} 
            style={styles.botao}
        >
            <Text style={styles.texto}>{text}</Text>
        </TouchableOpacity>
        
    )
}
