import { router, useFocusEffect } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

/*
import CardBookHisMedium from "../Components/cardBookHisMedium";
import { books } from "@/src/Components/objStorage";
*/

import { useCallback, useState } from "react";
import { loadFavorites } from "../Components/funFavorites";
import { loadReservs } from "../Components/funReservs";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any>(null);
  const [reservs, setReservs] = useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      loadFavorites({ setFavorites });
      console.log("Favoritos carregados!");
      loadReservs({ setReservs });
      console.log("Reservas carregadas!");
    }, [])
  );

  function goDetalhesLivro(id: string) {
    router.push({
      pathname: "/[detalheslivro]",
      params: { detalheslivro: id },
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {<Text style={styles.text}>Nenhum livro reservado ainda.</Text>}
        {/*
         <CardBookHisMedium
          clicked={() => goDetalhesLivro(books[0].id)}
          favorites={favorites}
          setFavorites={setFavorites}
          loan={"12/09/2024"}
          return={"19/09/2024"}
          reservs={reservs}
          setReservs={setReservs}
          book={books[0]}
        />
        <CardBookHisMedium
          clicked={() => goDetalhesLivro(books[0].id)}
          favorites={favorites}
          setFavorites={setFavorites}
          loan={"12/05/2024"}
          return={"19/05/2024"}
          reservs={reservs}
          setReservs={setReservs}
          book={books[1]}
        />
         */}
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
