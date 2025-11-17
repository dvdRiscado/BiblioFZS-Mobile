import { Image, Text, TouchableOpacity, View } from "react-native";

import { Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./style";

type CardBookDeMediumProps = {
  book: any;
  onPress: any;
};

export default function CardBookDeMedium({
  book,
  onPress,
}: CardBookDeMediumProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={book.uri} resizeMode="contain" />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.headline}>{book.title}</Text>
          <Text style={styles.text}>{book.author}</Text>
        </View>
        <View style={styles.infoBottomContainer}>
          <TouchableOpacity style={styles.largeButton} onPress={onPress}>
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
