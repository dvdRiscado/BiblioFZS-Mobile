import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

type props={
    children: string,
}

export function OpcaoLivro({ children }: props){

    

    return(
        <TouchableOpacity style={styles.botaoOpcao}>
            <Text>
                {children}
            </Text>
        </TouchableOpacity>
    )
}