import CardBookSmall from "@/src/Components/cardBookSmall";
import Header from "@/src/Components/header";
import InputSearch from "@/src/Components/inputSearch";
import { OpcaoLivro } from "@/src/Components/opcaoLivro";
import { router } from "expo-router";

import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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

export default function Catalog() {
  const [opcaoLivro, setOpcaoLivro] = useState("livro");

  function liga(val: string) {
    setOpcaoLivro(val);
  }

  function goDetalhesLivro() {
    router.navigate("/detalheslivro");
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <InputSearch />
        <View style={styles.containerOpcao}>
          <OpcaoLivro
            onPress={() => liga("livro")}
            valOn={opcaoLivro}
            valor={"livro"}
          >
            Livros
          </OpcaoLivro>
          <OpcaoLivro
            onPress={() => liga("dvds")}
            valOn={opcaoLivro}
            valor={"dvds"}
          >
            Dvd's
          </OpcaoLivro>
          <OpcaoLivro
            onPress={() => liga("monografias")}
            valOn={opcaoLivro}
            valor={"monografias"}
          >
            Monografias
          </OpcaoLivro>
        </View>
        <View style={styles.suggestion}>
          <View style={styles.row}>
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[0]} />
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[1]} />
          </View>
          <View style={styles.row}>
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[2]} />
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[0]} />
          </View>
          <View style={styles.row}>
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[1]} />
            <CardBookSmall clicked={goDetalhesLivro} book={bookData[2]} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
    height: "100%",
    marginBottom: 110,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  pesquisaContainer: {
    backgroundColor: "#000",
    width: 356,
    height: 54,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  pesquisaInput: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "#fff",
    width: "80%",
    marginLeft: 16,
    fontSize: 20,
  },

  containerOpcao: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 30,
    gap: "4%",
  },
  livroBackgroundContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  livroBackground: {
    backgroundColor: "#000",
    borderRadius: 32,
    width: 332,
    height: 538,
    alignItems: "center",
    justifyContent: "center",
  },

  opcaoLivroContainer: {
    flexDirection: "row",
    gap: 36,
    alignItems: "center",
    justifyContent: "center",
    margin: 36,
    height: 50,
  },
  opcaoLivroOff: {
    backgroundColor: "#E1E3DB",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  opcaoLivroOn: {
    backgroundColor: "#B9030F",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  suggestion: {
    paddingVertical: 5,
    marginBottom: 20,
    gap: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
