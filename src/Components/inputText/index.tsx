import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

type Props = TextInputProps & {
  type: string;
};

export function InputText({ type, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {type === "email" ? (
        <Fontisto style={styles.icon} name="email" size={20} color="black" />
      ) : (
        <AntDesign style={styles.icon} name="eye" size={20} color="black" />
      )}

      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
