import { UsuarioContext, UsuarioProvider } from "@/context/UsuarioContext";
import { router } from "expo-router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
// Componentes
import CardBookLarge from "@/src/Components/cardBookLarge";
import CardBookSmall from "@/src/Components/cardBookSmall";
import Header from "@/src/Components/header";
import InputSearch from "@/src/Components/inputSearch";

// Icones

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

export default function Home() {
  const width = Dimensions.get("window").width;
  const ctx = useContext(UsuarioContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  function goDetalhesLivro() {
    router.navigate("/detalheslivro");
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

  return (
    <UsuarioProvider>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <Text style={styles.headline}>Bem-Vindo, {ctx!.user!.nome}!</Text>
          <InputSearch />
          <View style={styles.carrossel}>
            <Text style={styles.titleWhite}>Livros para você!</Text>
            <Text style={styles.titleBook}>
              {bookData[activeIndex]?.title || "N/A"}
            </Text>
            <Text style={styles.textWhite}>
              {bookData[activeIndex]?.author || "N/A"}
            </Text>
            <Carousel
              loop
              width={width}
              height={width - 55}
              data={bookData}
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
                // Passamos a função animationStyle para o Animated.View
                const animatedStyle = animationStyle(
                  carouselRef.current?.getCurrentProgress?.() - index || 0
                );
                return (
                  <Animated.View style={animatedStyle}>
                    <CardBookLarge book={item} />
                  </Animated.View>
                );
              }}
            />
          </View>
          <Text style={[styles.title, { marginBottom: "2%" }]}>
            Outras Sugestões!
          </Text>
          <Text style={styles.textWhite}>
            {bookData[activeIndex]?.author || "N/A"}
          </Text>
          <Carousel
            loop
            width={width}
            height={width - 55}
            data={bookData}
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
              // Passamos a função animationStyle para o Animated.View
              const animatedStyle = animationStyle(
                carouselRef.current?.getCurrentProgress?.() - index || 0
              );
              return (
                <Animated.View style={animatedStyle}>
                  <CardBookLarge book={item} clicked={goDetalhesLivro} />
                </Animated.View>
              );
            }}
          />

          <Text style={[styles.title, { marginBottom: "2%" }]}>
            Outras Sugestões!
          </Text>
          <View style={styles.suggestion}>
            <View style={styles.row}>
              <CardBookSmall clicked={goDetalhesLivro} book={bookData[0]} />
              <CardBookSmall clicked={goDetalhesLivro} book={bookData[1]} />
            </View>
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
