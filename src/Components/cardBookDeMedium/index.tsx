import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./style";

type CardBookDeMediumProps = {
  book: any;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookDeMedium({
  book,
  clicked,
}: CardBookDeMediumProps) {
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
        <View style={styles.infoBottomContainer}>
          <TouchableOpacity style={styles.largeButton} onPress={clicked}>
            <Text style={styles.textButton}>Ver Detalhes</Text>
          </TouchableOpacity>

          <View style={styles.options}>
            <TouchableOpacity style={styles.button}>
              <Octicons name="bookmark-slash" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="plus-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
