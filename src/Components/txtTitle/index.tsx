import { Text } from "react-native";
import { styles } from "./style";

export default function TxtTitle({ text }: any) {
  return <Text style={styles.title}>{text}</Text>;
}
