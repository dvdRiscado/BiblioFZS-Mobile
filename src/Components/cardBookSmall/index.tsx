import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { sendIsFavorito, toggleFavorito } from "../funFavorites";
import { setReservadoTrue } from "../funReservs";
import RatingStars from "../ratingStars";

type CardBookSmallProps = {
  book: any;
  favorites: any;
  reservs: any;
  setReservs: React.Dispatch<React.SetStateAction<any>>;
  setFavorites: React.Dispatch<React.SetStateAction<any>>;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookSmall({
  book,
  favorites,
  setFavorites,
  reservs,
  setReservs,
  clicked,
}: CardBookSmallProps) {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    sendIsFavorito({ favorites, setIsFavorito, id: book.id });
  }, [favorites, book.id]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageWrapper} onPress={clicked}>
        <Image style={styles.image} source={book.uri} resizeMode="contain" />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.text}>{book.title}</Text>
        <View style={styles.infoptions}>
          <View style={styles.rating}>{RatingStars(book.rating, 22)}</View>
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
                size={19}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setReservadoTrue({ reservs, book, setReservs });
              }}
            >
              <AntDesign name="plus-circle" size={19} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
