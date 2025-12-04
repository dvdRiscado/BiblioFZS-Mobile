import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

type CardBookMediumProps = {
  book: any;
  daysLeft?: number;
  clicked: (event: GestureResponderEvent) => void;
};

export default function CardBookMedium({
  book,
  daysLeft,
  clicked,
}: CardBookMediumProps) {
  let percent = (((Number(daysLeft) - 7) * -1) / 7) * 100;

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
          <Text style={styles.caption}>{percent.toFixed(2)}%</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
            <View style={[styles.progressPercent, { width: `${percent}%` }]} />
          </View>
          <Text style={styles.label}>{daysLeft} dias restantes</Text>
        </View>
      </View>
    </View>
  );
}
