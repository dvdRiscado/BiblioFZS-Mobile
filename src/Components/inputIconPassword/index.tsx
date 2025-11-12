import { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

import AntDesign from "@expo/vector-icons/AntDesign";

type Props = TextInputProps & {
  type: string;
};

export function InputIconPassword({ type, ...rest }: Props) {
  const [view, setView] = useState(false);

  function viewPassword() {
    setView(!view);
  }

  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="lock" size={20} color="black" />
      <TextInput style={styles.input} {...rest} secureTextEntry={!view} />

      <TouchableOpacity style={styles.button} onPress={viewPassword}>
        {view === false ? (
          <AntDesign name="eye-invisible" size={20} color="black" />
        ) : (
          <AntDesign name="eye" size={20} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
}
