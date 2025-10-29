import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function HeaderProfile() {
  return (
    <View style={styles.header}>
      <View style={styles.space} />
      <Text style={styles.title}>Perfil</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
