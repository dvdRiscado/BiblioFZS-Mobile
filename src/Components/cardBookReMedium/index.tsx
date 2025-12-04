import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { setReservadoFalse } from "../funReservs";
import { styles } from "./style";

type CardBookReMediumProps = {
  book: any;
  daysLeft: number;
  reservs: any;
  setReservs: React.Dispatch<React.SetStateAction<any>>;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookReMedium({
  book,
  clicked,
  daysLeft,
  reservs,
  setReservs,
}: CardBookReMediumProps) {
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => setReservadoFalse({ reservs, book, setReservs })}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.label}>{daysLeft} dias restantes</Text>
        </View>
      </View>
    </View>
  );
}
