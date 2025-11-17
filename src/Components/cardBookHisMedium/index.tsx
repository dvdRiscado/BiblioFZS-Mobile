import { Image, Text, TouchableOpacity, View } from "react-native";

import { Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./style";

export default function CardBookHisMedium({ book }: any) {
  let percent = (((Number(book.day) - 7) * -1) / 7) * 100;

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
        <View style={styles.progressContainer}>
          <Text style={styles.label}>Retirada:</Text>
          <Text style={styles.info}> {book.loan}</Text>
          <Text style={styles.label}>Devolução:</Text>
          <Text style={styles.info}> {book.return}</Text>
          <View style={styles.options}>
            <TouchableOpacity style={styles.button}>
              <Octicons name="bookmark" size={25} color="black" />
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
