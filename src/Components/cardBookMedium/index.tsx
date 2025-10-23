import { Image, Text, View } from "react-native";
import { styles } from "./style";

export default function CardBookMedium({ book }: any) {
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
          <Text style={styles.caption}>{percent.toFixed(2)}%</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
            <View style={[styles.progressPercent, { width: `${percent}%` }]} />
          </View>
          <Text style={styles.label}>{book.day} dias restantes</Text>
        </View>
      </View>
    </View>
  );
}
