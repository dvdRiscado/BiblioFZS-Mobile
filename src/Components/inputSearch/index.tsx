import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type InputSearchProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function InputSearch({ value, onChangeText }: InputSearchProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquise aqui..."
        placeholderTextColor="#686868"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="search" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
