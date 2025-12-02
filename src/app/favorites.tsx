import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import CardBookDeMedium from "../Components/cardBookDeMedium";

import { books } from "@/src/Components/objStorage";

export default function Favorites() {
  function goDetalhesLivro(id: string) {
    router.push({
      pathname: "/[detalheslivro]",
      params: { detalheslivro: id },
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <CardBookDeMedium
          book={books[2]}
          clicked={() => goDetalhesLivro(books[2].id)}
        />
        <CardBookDeMedium
          book={books[1]}
          clicked={() => goDetalhesLivro(books[1].id)}
        />
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
