import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CardBookMedium from "@/src/Components/cardBookMedium";
import CardBookReMedium from "@/src/Components/cardBookReMedium";
import Header from "@/src/Components/header";
import OptionSection from "@/src/Components/optionSection";

export default function Historic() {
  const [section, setSection] = useState("reserva");

  const selected = useLocalSearchParams();

  function goDetalhesLivro() {
    router.navigate("/detalheslivro");
  }

  useEffect(() => {
    if (!selected?.reserve_loan) return;
    const val = String(selected.reserve_loan);
    if (val === "emprestimo") setSection("emprestimo");
    else if (val === "reserva") setSection("reserva");
  }, [selected?.reserve_loan]);

  const bookData = [
    {
      id: "1",
      title: "Entendendo Algoritmos",
      author: "Aditya Y. Bhargava",
      day: "1",
      uri: require("@/assets/images/image.png"),
    },
    {
      id: "2",
      title: "Não Entendendo Algoritmos",
      author: "Aditya Y. Bhargava",
      day: "4",
      uri: require("@/assets/images/image.png"),
    },
    {
      id: "3",
      title: "Desisto de Algoritmos",
      author: "Aditya Y. Bhargava",
      day: "1",
      uri: require("@/assets/images/image.png"),
    },
  ];

  function changeSection(val: string) {
    setSection(val);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Text style={styles.headline}>Meus Livros</Text>
        <View style={styles.optionContainer}>
          <OptionSection
            onPress={() => {
              changeSection("reserva");
              console.log("reserva");
            }}
            valOn={section}
            valor={"reserva"}
            qtd={1}
          >
            Reservados
          </OptionSection>
          <OptionSection
            onPress={() => {
              changeSection("emprestimo");
              console.log("emprestimo");
            }}
            valOn={section}
            valor={"emprestimo"}
            qtd={2}
          >
            Emprestados
          </OptionSection>
        </View>

        {section === "emprestimo" ? (
          <View style={styles.booksContainer}>
            <CardBookMedium book={bookData[0]} clicked={goDetalhesLivro} />
            <CardBookMedium book={bookData[1]} clicked={goDetalhesLivro} />
          </View>
        ) : (
          <View style={styles.booksContainer}>
            <CardBookReMedium book={bookData[2]} clicked={goDetalhesLivro} />
          </View>
        )}
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
    width: "100%",
    marginBottom: 110,
  },
  headline: {
    marginBottom: "4%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 30,
    gap: "4%",
  },
  booksContainer: {
    paddingVertical: 5,
  },
});
