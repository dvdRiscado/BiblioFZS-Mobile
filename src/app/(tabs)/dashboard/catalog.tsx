import CardBookSmall from "@/src/Components/cardBookSmall";
import Header from "@/src/Components/header";
import InputSearch from "@/src/Components/inputSearch";
import { OpcaoLivro } from "@/src/Components/opcaoLivro";
import { router, useFocusEffect } from "expo-router";

import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { loadFavorites } from "@/src/Components/funFavorites";

import { books } from "@/src/Components/objStorage";

export default function Catalog() {
  const [opcaoLivro, setOpcaoLivro] = useState("livro");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  let [favorites, setFavorites] = useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      loadFavorites({ setFavorites });
      console.log("Favoritos carregados!");
    }, [])
  );

  function liga(val: string) {
    setOpcaoLivro(val);
  }

  function handleSearch(query: string) {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
      console.log("Livros encontrados:", filtered);
    }
  }

  function goDetalhesLivro(id: string) {
    router.push({
      pathname: "/[detalheslivro]",
      params: { detalheslivro: id },
    });
  }

  // Função para renderizar os livros em linhas de 2
  function renderBooks() {
    const rows = [];
    for (let i = 0; i < filteredBooks.length; i += 2) {
      rows.push(
        <View key={i} style={styles.row}>
          <CardBookSmall
            clicked={() => goDetalhesLivro(filteredBooks[i].id)}
            favorites={favorites}
            setFavorites={setFavorites}
            book={filteredBooks[i]}
          />
          {filteredBooks[i + 1] && (
            <CardBookSmall
              clicked={() => goDetalhesLivro(filteredBooks[i + 1].id)}
              favorites={favorites}
              setFavorites={setFavorites}
              book={filteredBooks[i + 1]}
            />
          )}
        </View>
      );
    }
    return rows;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <InputSearch value={searchQuery} onChangeText={handleSearch} />
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
          {opcaoLivro === "livro" ? (
            renderBooks()
          ) : opcaoLivro === "dvds" ? (
            <Text style={styles.caption}>Nenhum DVD encontrado.</Text>
          ) : (
            <Text style={styles.caption}>Nenhuma monografia encontrada.</Text>
          )}
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
  caption: {
    fontSize: 16,
    fontWeight: "medium",
    width: "100%",
    textAlign: "center",
    color: "rgba(0,0,0,0.6)",
    marginTop: 32,
  },
});
