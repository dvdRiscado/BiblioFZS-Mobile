import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useEffect, useState } from "react";
import { sendIsFavorito, toggleFavorito } from "../funFavorites";
import { setReservadoTrue } from "../funReservs";
import { styles } from "./style";

type CardBookHisProps = {
  book: any;
  loan: string;
  return: string;

  favorites?: any;
  reservs?: any;
  setReservs?: React.Dispatch<React.SetStateAction<any>>;
  setFavorites?: React.Dispatch<React.SetStateAction<any>>;

  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookHisMedium({
  book,
  loan,
  favorites,
  reservs,
  setReservs,
  setFavorites,
  return: returnDate,
  clicked,
}: CardBookHisProps) {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    sendIsFavorito({ favorites, setIsFavorito, id: book.id });
  }, [favorites, book.id]);

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
          <Text style={styles.label}>Retirada:</Text>
          <Text style={styles.info}> {loan}</Text>
          <Text style={styles.label}>Devolução:</Text>
          <Text style={styles.info}> {returnDate}</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                toggleFavorito({
                  favorites,
                  book,
                  setIsFavorito,
                  setFavorites,
                })
              }
            >
              <Ionicons
                name={isFavorito ? "bookmark" : "bookmark-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setReservadoTrue({ reservs, book, setReservs });
              }}
            >
              <AntDesign name="plus-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
