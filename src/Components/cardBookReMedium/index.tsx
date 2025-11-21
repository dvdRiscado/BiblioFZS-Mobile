import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

type CardBookReMediumProps = {
  book: any;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookReMedium({
  book,
  clicked,
}: CardBookReMediumProps) {
  let percent = (((Number(book.day) - 7) * -1) / 7) * 100;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={clicked}>
        <Image style={styles.image} source={book.uri} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.headline}>{book.title}</Text>
          <Text style={styles.text}>{book.author}</Text>
        </View>
        <View style={styles.progressContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.label}>{book.day} dias restantes</Text>
        </View>
      </View>
    </View>
  );
}
