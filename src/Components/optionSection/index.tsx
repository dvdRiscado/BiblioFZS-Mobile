import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type props = {
  children: string;
  valor: string;
  valOn: string;
  onPress: any;
  qtd: number;
};

export default function OptionSection({
  children,
  valOn,
  valor,
  qtd,
  onPress,
}: props) {
  return (
    <TouchableOpacity
      style={valOn === valor ? styles.botaoAtivado : styles.botaoDesativado}
      onPress={onPress}
    >
      <Text style={valOn === valor ? styles.textoBotaoAtivado : null}>
        {children + "  " + qtd}
      </Text>
    </TouchableOpacity>
  );
}
