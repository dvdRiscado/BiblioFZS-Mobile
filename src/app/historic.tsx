import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardBookHisMedium from "../Components/cardBookHisMedium";

const bookData = [
  {
    id: "1",
    title: "Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 4.5,
    loan: "8/10/2025",
    return: "15/10/2025",
    uri: require("@/assets/images/image.png"),
  },
  {
    id: "2",
    title: "Não Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 4.0,
    loan: "12/09/2025",
    return: "19/09/2025",
    uri: require("@/assets/images/image.png"),
  },
  {
    id: "3",
    title: "Desisto de Algoritmos",
    author: "Aditya Y. Bhargava",
    rating: 3.5,
    loan: "14/05/2025",
    return: "21/05/2025",
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
        <CardBookHisMedium book={bookData[0]} onPress={goToDetalhesLivro} />
        <CardBookHisMedium book={bookData[1]} onPress={goToDetalhesLivro} />
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
