import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

import { styles } from "./style";

export default function RatingStars(rating: number, size: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <Ionicons key={i + "full"} name="star" size={size} color="#f19e03" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <Ionicons key={i + "half"} name="star-half" size={22} color="#f19e03" />
      );
    } else {
      stars.push(
        <Ionicons
          key={i + "empty"}
          name="star-outline"
          size={22}
          color="#f19e03"
        />
      );
    }
  }
  return <View style={styles.rating}>{stars}</View>;
}
