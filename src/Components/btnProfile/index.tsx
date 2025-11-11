import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function BtnProfile({ text, icon, onPress }: any) {
  function chooseIcon() {
    switch (icon) {
      case "share":
        return <Entypo name="share" size={24} color="black" />;
      case "logout":
        return <MaterialIcons name="logout" size={24} color="black" />;
      case "language":
        return <Ionicons name="language" size={24} color="black" />;
      case "moon":
        return <FontAwesome name="moon-o" size={24} color="black" />;
      default:
        return;
    }
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.buttonText}>
        {chooseIcon()}
        <Text style={styles.text}>{text}</Text>
      </View>

      <FontAwesome name="angle-right" size={24} color="black" />
    </TouchableOpacity>
  );
}
