import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { books } from "@/src/Components/objStorage";
import {
  addComment,
  loadComments,
  sendComments,
} from "../Components/funComments";
import {
  loadFavorites,
  sendIsFavorito,
  toggleFavorito,
} from "../Components/funFavorites";
import {
  loadReservs,
  sendIsReservado,
  toggleReservado,
} from "../Components/funReservs";
import RatingStars from "../Components/ratingStars";

export default function DetalhesLivro() {
  const selected = useLocalSearchParams();
  const book = books.find((b) => b.id === selected.detalheslivro);

  const [isFavorito, setIsFavorito] = useState(false);
  const [isReservado, setIsReservado] = useState(false);

  const [favorites, setFavorites] = useState<any>(null);
  const [reservs, setReservs] = useState<any>(null);
  const [comments, setComments] = useState<any>(null);
  const [bookComments, setBookComments] = useState<any>(null);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("0");

  const [commentError, setCommentError] = useState("");

  useFocusEffect(
    useCallback(() => {
      loadFavorites({ setFavorites });
      console.log("Favoritos carregados!");
      loadReservs({ setReservs });
      console.log("Reservas carregadas!");
      loadComments({ setComments });
      console.log("Comentários carregados!");
    }, [])
  );

  useEffect(() => {
    sendIsFavorito({ favorites, setIsFavorito, id: book?.id });
  }, [favorites, book?.id]);

  useEffect(() => {
    sendIsReservado({ reservs, setIsReservado, id: book?.id });
  }, [reservs, book?.id]);

  useEffect(() => {
    sendComments({ comments, setBookComments, id: book?.id });
  }, [comments, book?.id]);

  function uploadComment() {
    if (comment.trim() === "") {
      setCommentError("O comentário não pode ser vazio.");
      return;
    } else if (comment.length < 5) {
      setCommentError("O comentário deve ter pelo menos 5 caracteres.");
      return;
    }
    if (rating === "0") {
      setCommentError("Por favor, forneça uma avaliação com estrelas.");
      return;
    }

    addComment({
      comments,
      book,
      newComment: comment,
      newRating: rating,
      setComments,
      setBookComments,
    });

    setComment("");
    setCommentError("");
    setRating("0");
  }

  function handleStarPress(starValue: string) {
    setRating(starValue);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
    >
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.divHeaderLivro}>
          <View style={styles.BackgroundLivro}>
            <Image
              source={book?.uri}
              style={{ width: "auto", height: "90%", margin: 8 }}
            ></Image>
          </View>
          <View style={styles.divHeaderDescLivro}>
            <Text style={styles.titulo}>{book?.title}</Text>
            <Text style={styles.subtitulo}>{book?.author}</Text>
            <View style={styles.divEstrelas}>
              {RatingStars(book?.rating ?? 0, 24)}
              <Text style={{ fontSize: 12 }}>
                ({bookComments?.length} avaliações)
              </Text>
            </View>
            <View style={styles.divDescricao}>
              <View>
                <Text style={styles.descricaoKey}> Unidade</Text>
                <Text style={styles.descricaoKey}> Ano</Text>
                <Text style={styles.descricaoKey}> Idioma</Text>
              </View>
              <View>
                <Text style={styles.descricaoValue}>{book?.exemplares}</Text>
                <Text style={styles.descricaoValue}>{book?.ano}</Text>
                <Text style={styles.descricaoValue}>{book?.idioma}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divDescricao1}>
          <View>
            <Text style={styles.descricaoKey2}>Categoria</Text>
          </View>
          <View>
            <Text style={styles.descricaoValue}>
              {book?.categoria.join(", ")}
            </Text>
          </View>
        </View>
        <View style={styles.divDescricao2}>
          <View>
            <Text style={styles.descricaoKey2}>Autor</Text>
            <Text style={styles.descricaoKey2}>País</Text>
            <Text style={styles.descricaoKey2}>Editora</Text>
          </View>
          <View>
            <Text style={styles.descricaoValue}>{book?.author}</Text>
            <Text style={styles.descricaoValue}>{book?.pais}</Text>
            <Text style={styles.descricaoValue}>{book?.editora}</Text>
          </View>
        </View>
        <View style={styles.palavraChaveDiv}>
          <Text style={styles.subtitulo2}>Palavras chaves:</Text>
          {book?.categoria.map((cat, index) => (
            <View key={index} style={styles.palavraChave}>
              <Text>{cat}</Text>
            </View>
          ))}
        </View>
        <View style={styles.divAvaliacaoEstrelas}>
          <TouchableOpacity onPress={() => handleStarPress("1")}>
            <Ionicons
              name={rating >= "1" ? "star" : "star-outline"}
              size={32}
              color={rating >= "1" ? "#B9030F" : "black"}
              fill={rating >= "1" ? "#B9030F" : "none"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStarPress("2")}>
            <Ionicons
              name={rating >= "2" ? "star" : "star-outline"}
              size={32}
              color={rating >= "2" ? "#B9030F" : "black"}
              fill={rating >= "2" ? "#B9030F" : "none"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStarPress("3")}>
            <Ionicons
              name={rating >= "3" ? "star" : "star-outline"}
              size={32}
              color={rating >= "3" ? "#B9030F" : "black"}
              fill={rating >= "3" ? "#B9030F" : "none"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStarPress("4")}>
            <Ionicons
              name={rating >= "4" ? "star" : "star-outline"}
              size={32}
              color={rating >= "4" ? "#B9030F" : "black"}
              fill={rating >= "4" ? "#B9030F" : "none"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStarPress("5")}>
            <Ionicons
              name={rating >= "5" ? "star" : "star-outline"}
              size={32}
              color={rating >= "5" ? "#B9030F" : "black"}
              fill={rating >= "5" ? "#B9030F" : "none"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.comentarioContainer}>
          <View style={styles.comentarioInputContainer}>
            <TextInput
              style={styles.comentarioInput}
              placeholder="Deixe seu comentário"
              value={comment}
              onChangeText={(text) => setComment(text)}
            ></TextInput>
            <TouchableOpacity onPress={uploadComment}>
              <Text style={styles.postarComentario}>Postar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.caption}>{commentError}</Text>
        </View>
        <View style={styles.sectionComentario}>
          {bookComments?.map((comment: any) => (
            <View key={comment.id} style={styles.divComentario}>
              <Text style={styles.dadosComentario}>
                {comment.nome} • {comment.data}
              </Text>
              <Text style={styles.comentario}>{comment.comentario}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.divButton}>
        <TouchableOpacity
          style={styles.btnReservar}
          activeOpacity={0.4}
          onPress={() => {
            toggleReservado({ reservs, book, setIsReservado, setReservs });
          }}
        >
          <Text style={styles.textoBtnReservar}>
            {isReservado ? "Desreservar" : "Reservar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnFavoritar}
          activeOpacity={0.4}
          onPress={() =>
            toggleFavorito({
              favorites,
              book,
              setIsFavorito,
              setFavorites,
            })
          }
        >
          <Ionicons
            name={isFavorito ? "bookmark" : "bookmark-outline"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollContainer: {
    width: "100%",
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  divHeaderLivro: {
    marginTop: 20,
    flexDirection: "row",
    gap: 16,
    marginBottom: 28,
  },
  divHeaderDescLivro: {
    gap: 16,
  },
  BackgroundLivro: {
    backgroundColor: "#000",
    width: 126,
    height: 196,
    borderRadius: 8,
    justifyContent: "center",
  },
  titulo: {
    fontWeight: "900",
    fontSize: 18,
  },
  subtitulo: {
    fontWeight: "900",
    fontSize: 16,
    color: "rgba(0,0,0,0.4)",
  },
  subtitulo2: {
    fontWeight: "900",
    fontSize: 16,
    color: "rgba(0,0,0,0.4)",
    paddingVertical: 8,
    marginRight: 8,
  },
  divEstrelas: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  divAvaliacaoEstrelas: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 28,
  },
  divDescricao: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 24,
  },
  divDescricao1: {
    flexDirection: "row",
    gap: 24,
  },
  divDescricao2: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 28,
  },
  descricaoKey: {
    fontSize: 14,
    fontWeight: "900",
    color: "rgba(0,0,0,0.4)",
    letterSpacing: 1,
  },
  descricaoKey2: {
    fontSize: 14,
    fontWeight: "900",
    color: "rgba(0,0,0,0.4)",
    letterSpacing: 1,
    width: 70,
  },
  descricaoValue: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
    width: 270,
  },
  palavraChaveDiv: {
    flexDirection: "row",
    flexWrap: "wrap", // permite quebra de linha
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 4,

    marginBottom: 28,
  },
  palavraChave: {
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8, // espaçamento horizontal entre tags
    marginBottom: 8, // espaçamento vertical entre linhas
    alignSelf: "flex-start",
    maxWidth: "48%", // evita que ultrapassem a largura; duas por linha no máximo
    overflow: "hidden",
  },
  comentarioContainer: {
    marginBottom: 16,
    gap: 5,
  },
  comentarioInputContainer: {
    borderWidth: 2,
    width: "100%",
    height: 54,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  comentarioInput: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "70%",
    marginLeft: 14,
    fontSize: 20,
  },
  postarComentario: {
    color: "#B9030F",
    fontSize: 20,
    marginRight: 18,
    fontWeight: "900",
  },
  sectionComentario: {
    gap: 12,
    marginBottom: 20,
  },
  divComentario: {
    backgroundColor: "#FFE8E8",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "100%",
    gap: 10,
  },
  divDadosComentario: {
    flexDirection: "row",
  },
  dadosComentario: {
    fontWeight: "900",
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
  },
  comentario: {
    fontWeight: "700",
    fontSize: 18,
  },
  divButton: {
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 24,
    paddingBottom: 40,
    borderTopWidth: 5,
    borderTopColor: "#F6F6F6",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnReservar: {
    backgroundColor: "#B9030F",
    borderRadius: 18,
    width: "78%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBtnReservar: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "500",
  },
  btnFavoritar: {
    backgroundColor: "#161917",
    borderRadius: 18,
    width: "20%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    fontSize: 12,
    color: "#B9030F",
    marginLeft: 10,
  },
});
