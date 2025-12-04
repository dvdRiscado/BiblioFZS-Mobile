import { router, useFocusEffect } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardBookDeMedium from "../Components/cardBookDeMedium";

import { books } from "@/src/Components/objStorage";

import { useCallback, useState } from "react";

import { loadFavorites, sendQntFavoritos } from "../Components/funFavorites";
import { loadReservs } from "../Components/funReservs";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any>(null);
  const [reservs, setReservs] = useState<any>(null);
  const [qtdFavoritos, setQtdFavoritos] = useState(0);

  // useFocusEffect executa a função toda vez que a tela recebe foco
  useFocusEffect(
    useCallback(() => {
      loadFavorites({ setFavorites });
      console.log("Favoritos carregados!");
      loadReservs({ setReservs });
      console.log("Reservas carregadas!");
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      sendQntFavoritos({ favorites, setQtdFavoritos });
      console.log("Quantidade de favoritos atualizada!");
    }, [favorites])
  );

  function goDetalhesLivro(id: string) {
    router.push({
      pathname: "/[detalheslivro]",
      params: { detalheslivro: id },
    });
  }

  // Filtra os livros que são favoritos
  const favoriteBooks = books.filter((book) =>
    favorites?.some((fav: any) => fav.id === book.id.toString() && fav.favorito)
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {qtdFavoritos === 0 ? (
          <Text style={styles.text}>Nenhum favorito encontrado.</Text>
        ) : (
          favoriteBooks.map((book) => (
            <CardBookDeMedium
              favorites={favorites}
              setFavorites={setFavorites}
              reservs={reservs}
              setReservs={setReservs}
              key={book.id}
              book={book}
              clicked={() => goDetalhesLivro(book.id.toString())}
            />
          ))
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
    height: "100%",
    paddingBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "medium",
    width: "100%",
    textAlign: "center",
    color: "rgba(0,0,0,0.6)",
    marginTop: 32,
  },
});
