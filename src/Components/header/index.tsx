import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export default function Header() {
  function goQr() {
    router.push("/(tabs)/qrcode");
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goQr}>
        <FontAwesome name="camera" size={24} color="#B9030F" />
      </TouchableOpacity>
      <Text style={styles.title}>BIBLIOFZS</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#B9030F" />
      </TouchableOpacity>
    </View>
  );
}
