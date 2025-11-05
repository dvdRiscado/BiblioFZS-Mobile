import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function BtnBack({ onPress }: any) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Fontisto name="arrow-return-left" size={24} color="white" />
    </TouchableOpacity>
  );
}
