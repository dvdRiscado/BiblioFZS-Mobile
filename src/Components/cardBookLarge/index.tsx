import { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

import RatingStars from "../ratingStars";
import { styles } from "./style";

import { Ionicons } from "@expo/vector-icons";
import { sendIsFavorito, toggleFavorito } from "../funFavorites";
import { setReservadoTrue } from "../funReservs";

type CardBookLargeProps = {
  book: any;
  favorites: any;
  setFavorites: React.Dispatch<React.SetStateAction<any>>;
  reservs: any;
  setReservs: React.Dispatch<React.SetStateAction<any>>;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookLarge({
  book,
  favorites,
  setFavorites,
  reservs,
  setReservs,
  clicked,
}: CardBookLargeProps) {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    sendIsFavorito({ favorites, setIsFavorito, id: book.id });
  }, [favorites, book.id]);

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
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setReservadoTrue({ reservs, book, setReservs });
              }}
            >
              <AntDesign name="plus-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
