import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import RatingStars from "../ratingStars";

export default function CardBookSmall({ book }: any) {
  function onPressTest() {
    console.log("buga??");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageWrapper}>
        <Image style={styles.image} source={book.uri} resizeMode="contain" />

        <View style={styles.info}>
          <Text style={styles.text}>{book.title}</Text>
          <View style={styles.infoptions}>
            <View style={styles.rating}>{RatingStars(book.rating, 22)}</View>
            <View style={styles.options}>
              <TouchableOpacity style={styles.button}>
                <FontAwesome6 name="bookmark" size={19} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <AntDesign name="plus-circle" size={19} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
