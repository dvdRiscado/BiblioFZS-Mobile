import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import CardBookHisMedium from "../Components/cardBookHisMedium";

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
        <CardBookHisMedium
          book={books[0]}
          clicked={() => goDetalhesLivro(books[0].id)}
        />
        <CardBookHisMedium
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
