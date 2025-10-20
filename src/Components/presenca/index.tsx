import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
export default function Presenca() {
    return(
        <View style={styles.presenca}>
            <Image source={require('@/assets/images/img/qrcode.png')} style={{width: 46, height:46}}></Image>
            <View style={styles.presencaInfo}>
                <View style={styles.presencaLinha}>
                    <Text style={styles.presencaTexto}>Presença Confirmada</Text>
                    <TouchableOpacity>
                        <Ionicons name="trash-sharp" size={24} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles.presencaLinha}>
                    <Text style={styles.presencaTextoData}>Data</Text>
                    <Text style={styles.presencaTextoData}>12 Dez 2024, 9:30 </Text>
                </View>                        
            </View>
        </View>
    )
}