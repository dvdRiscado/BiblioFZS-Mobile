import { router } from "expo-router";
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import RatingStars from "../ratingStars";
import { styles } from "./style";

type CardBookLargeProps = {
  book: any;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookLarge({ book, clicked }: CardBookLargeProps) {
  function goDetalhesLivro() {
    router.navigate("/detalheslivro");
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity
          onPress={clicked}
          style={styles.imageWrapper}
          activeOpacity={0.7}
        >
          <Image style={styles.image} source={book.uri} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.infoptions}>
          <View style={styles.rating}>{RatingStars(book.rating, 22)}</View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome6 name="bookmark" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="plus-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
