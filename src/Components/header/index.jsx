import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>BIBLIOFZS</Text>
      <TouchableOpacity style={styles.btnNotification}>
        <Ionicons name="notifications-outline" size={24} color="#B9030F" />
      </TouchableOpacity>
    </View>
  );
}
