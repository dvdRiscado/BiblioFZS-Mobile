import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import CardBookDeMedium from "../Components/cardBookDeMedium";

const bookData = [
  {
    id: "1",
    title: "Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 4.5,
    uri: require("@/assets/images/image.png"),
  },
  {
    id: "2",
    title: "Não Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 4.0,
    uri: require("@/assets/images/image.png"),
  },
  {
    id: "3",
    title: "Desisto de Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 3.5,
    uri: require("@/assets/images/image.png"),
  },
];

export default function Favorites() {
  function goToDetalhesLivro() {
    router.push("/detalheslivro");
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <CardBookDeMedium book={bookData[2]} onPress={goToDetalhesLivro} />
        <CardBookDeMedium book={bookData[1]} onPress={goToDetalhesLivro} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
    height: "100%",
  },
});
