import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

export default function InputText({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
