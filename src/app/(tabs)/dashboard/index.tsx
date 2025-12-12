import { UsuarioContext, UsuarioProvider } from "@/context/UsuarioContext";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
// Componentes
import CardBookLarge from "@/src/Components/cardBookLarge";
import CardBookSmall from "@/src/Components/cardBookSmall";
import Header from "@/src/Components/header";
import InputSearch from "@/src/Components/inputSearch";

import { books } from "@/src/Components/objStorage";

import { loadFavorites } from "@/src/Components/funFavorites";
import { loadReservs } from "@/src/Components/funReservs";

/*
import { clearFavorites } from "@/src/Components/funFavorites";
import { clearReservs } from "@/src/Components/funReservs";
import { clearComments } from "@/src/Components/funComments";

// Limpar dados de teste
clearFavorites();
clearReservs();
clearComments();
*/

// Icones
export default function Home() {
  const width = Dimensions.get("window").width;

  const [favorites, setFavorites] = useState<any>(null);
  const [reservs, setReservs] = useState<any>(null);
  const ctx = useContext(UsuarioContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  // useFocusEffect executa a função toda vez que a tela recebe foco
  useFocusEffect(
    useCallback(() => {
      loadFavorites({ setFavorites });
      console.log("Favoritos carregados!");
      loadReservs({ setReservs });
      console.log("Reservas carregadas!");
    }, [])
  );

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

  const animationStyle = useCallback((value) => {
    "worklet";
    const scale = interpolate(
      value,
      [-1, 0, 1],
      [0.8, 1, 0.8], // Escala: itens laterais 80%, item central 100%
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      value,
      [-1, 0, 1],
      [0.6, 1, 0.6], // Opacidade: itens laterais 60%, item central 100%
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale }],
      opacity,
    };
  }, []);

  useEffect(() => {
    console.log(">>> USER ATUALIZADO NA TELA:", ctx?.user);
  }, [ctx?.user]);

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
            reservs={reservs}
            setReservs={setReservs}
            book={filteredBooks[i]}
          />
          {filteredBooks[i + 1] && (
            <CardBookSmall
              clicked={() => goDetalhesLivro(filteredBooks[i + 1].id)}
              favorites={favorites}
              setFavorites={setFavorites}
              reservs={reservs}
              setReservs={setReservs}
              book={filteredBooks[i + 1]}
            />
          )}
        </View>
      );
    }
    return rows;
  }

  return (
    <UsuarioProvider>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <Text style={styles.headline}>Bem-Vindo, {ctx?.user?.nome}</Text>
          <InputSearch value={searchQuery} onChangeText={handleSearch} />

          {searchQuery.trim() === "" ? (
            <>
              <View style={styles.carrossel}>
                <Text style={styles.titleWhite}>Livros para você!</Text>
                <Text style={styles.titleBook}>
                  {books[activeIndex]?.title || "N/A"}
                </Text>
                <Text style={styles.textWhite}>
                  {books[activeIndex]?.author || "N/A"}
                </Text>
                <Carousel
                  loop
                  width={width}
                  height={width - 55}
                  data={books}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  scrollAnimationDuration={500}
                  mode="parallax"
                  modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 190,
                  }}
                  onSnapToItem={(index) => setActiveIndex(index)}
                  pagingEnabled={true}
                  snapEnabled={true}
                  renderItem={({ item, index }) => {
                    const animatedStyle = animationStyle(
                      carouselRef.current?.getCurrentProgress?.() - index || 0
                    );
                    return (
                      <Animated.View style={animatedStyle}>
                        <CardBookLarge
                          book={item}
                          favorites={favorites}
                          setFavorites={setFavorites}
                          reservs={reservs}
                          setReservs={setReservs}
                          clicked={() => goDetalhesLivro(item.id)}
                        />
                      </Animated.View>
                    );
                  }}
                />
              </View>
              <Text style={[styles.title, { marginBottom: "2%" }]}>
                Outras Sugestões!
              </Text>
              <View style={styles.suggestion}>
                <View style={styles.row}>
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[0].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[0]}
                  />
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[1].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[1]}
                  />
                </View>
                <View style={styles.row}>
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[2].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[2]}
                  />
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[3].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[3]}
                  />
                </View>
                <View style={styles.row}>
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[4].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[4]}
                  />
                  <CardBookSmall
                    clicked={() => goDetalhesLivro(books[5].id)}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    reservs={reservs}
                    setReservs={setReservs}
                    book={books[5]}
                  />
                </View>
              </View>
            </>
          ) : (
            <>
              <Text
                style={[styles.title, { marginBottom: "2%", marginTop: "4%" }]}
              >
                Resultados da Pesquisa
              </Text>
              <View style={styles.suggestion}>{renderBooks()}</View>
            </>
          )}
        </ScrollView>
      </View>
    </UsuarioProvider>
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

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "center",
  },

  titleWhite: {
    fontSize: 20,
    color: "#dadada",
    fontWeight: "semibold",
    textAlign: "center",
  },

  headline: {
    marginBottom: "4%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  titleBook: {
    marginTop: "4%",
    marginBottom: "1%",
    fontSize: 24,
    color: "#B9030F",
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    marginBottom: "8%",
    fontSize: 18,
    fontWeight: "regular",
    width: 300,
    textAlign: "center",
  },

  textWhite: {
    marginBottom: "4%",
    fontSize: 18,
    fontWeight: "regular",
    color: "white",
    width: 300,
    textAlign: "center",
  },

  btnNotification: {},

  carrossel: {
    paddingTop: 30,
    marginTop: "2%",
    marginBottom: "4%",
    flex: 1,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#161917",
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
