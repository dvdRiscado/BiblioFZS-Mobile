import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function InputSearch() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquise aqui..."
        placeholderTextColor="#686868"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="search" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
