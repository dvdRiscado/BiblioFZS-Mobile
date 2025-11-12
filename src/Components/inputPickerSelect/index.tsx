import RNPickerSelect from "react-native-picker-select";

import { styles } from "./style";

type Props = {
  change: Function;
  items: any;
  text: string;
};

export function InputPickerSelect({ change, items, text }: Props) {
  return (
    // Remova o <View style={styles.container}> daqui, pois
    // vamos aplicar o estilo de contêiner diretamente no RNPickerSelect
    <RNPickerSelect
      onValueChange={(value) => change(value)}
      items={items}
      placeholder={{
        label: text, // O texto placeholder que você passa
        value: "",
        color: "#9E9E9E", // Cor do placeholder
      }}
      // Aplica os estilos
      style={{
        // Aplica o estilo do container (borda, altura, etc.)
        viewContainer: styles.container,

        // Estilo do texto (iOS)
        inputIOS: styles.input,

        // Estilo do texto (Android)
        inputAndroid: styles.input,

        // Estilo do texto do placeholder (Apenas se o placeholder for visível)
        placeholder: styles.placeholder,
      }}
    />
  );
}
