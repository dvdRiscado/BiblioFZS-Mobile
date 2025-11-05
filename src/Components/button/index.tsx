import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type props = {
  text: string;
  onPress: any;
};

export function Button({ text, onPress }: props) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.texto}>{text}</Text>
    </TouchableOpacity>
  );
}
