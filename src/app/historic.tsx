import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
        <Text style={styles.text}>Nenhum livro reservado</Text>
        {/* <CardBookHisMedium book={books[0]} clicked={goDetalhesLivro} />
        <CardBookHisMedium book={books[1]} clicked={goDetalhesLivro} /> */}
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

  text: {
    fontSize: 16,
    fontWeight: "medium",
    width: "100%",
    textAlign: "center",
    color: "rgba(0,0,0,0.6)",
  },
});
