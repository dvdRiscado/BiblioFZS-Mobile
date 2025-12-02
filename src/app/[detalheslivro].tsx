import { Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { books } from "@/src/Components/objStorage";

export default function DetalhesLivro() {
  const selected = useLocalSearchParams();
  const book = books.find((b) => b.id === selected.detalheslivro);

  return (
    <View style={styles.container}>
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
            <AntDesign name="star" size={24} color="black" />
            <AntDesign name="star" size={24} color="black" />
            <AntDesign name="star" size={24} color="black" />
            <AntDesign name="star" size={24} color="black" />
            <AntDesign name="star" size={24} color="black" />
            <Text style={{ fontSize: 12 }}>(37 avaliações)</Text>
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
      <View style={styles.divDescricao2}>
        <View>
          <Text style={styles.descricaoKey}>Categoria</Text>
          <Text style={styles.descricaoKey}>Autor</Text>
          <Text style={styles.descricaoKey}>País</Text>
          <Text style={styles.descricaoKey}>Editora</Text>
        </View>
        <View>
          <Text style={styles.descricaoValue}>
            {book?.categoria.join(", ")}
          </Text>
          <Text style={styles.descricaoValue}>{book?.author}</Text>
          <Text style={styles.descricaoValue}>{book?.pais}</Text>
          <Text style={styles.descricaoValue}>{book?.editora}</Text>
        </View>
      </View>
      <View style={styles.palavraChaveDiv}>
        <Text style={styles.subtitulo}>Palavras chaves:</Text>
        {book?.categoria.map((cat, index) => (
          <View key={index} style={styles.palavraChave}>
            <Text>{cat}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divAvaliacaoEstrelas}>
        <Feather name="star" size={32} color="black" />
        <Feather name="star" size={32} color="black" />
        <Feather name="star" size={32} color="black" />
        <Feather name="star" size={32} color="black" />
        <Feather name="star" size={32} color="black" />
      </View>
      <View style={styles.comentarioInputContainer}>
        <TextInput
          style={styles.comentarioInput}
          placeholder="Deixe seu comentário"
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.postarComentario}>Postar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divComentario}>
        <Text style={styles.dadosComentario}>
          Gabriel Marcos • 02 Fevereiro, 2022
        </Text>
        <Text style={styles.comentario}>Melhor livro que já li!</Text>
        {/* <Text>a</Text> */}
      </View>
      <View style={styles.divButton}>
        <TouchableOpacity style={styles.btnReservar} activeOpacity={0.4}>
          <Text style={styles.textoBtnReservar}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFavoritar} activeOpacity={0.4}>
          <Octicons name="bookmark" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 42,
    marginHorizontal: 24,
    gap: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  divHeaderLivro: {
    flexDirection: "row",
    gap: 16,
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
  },
  divDescricao: {
    flexDirection: "row",
    gap: 24,
  },
  divDescricao2: {
    flexDirection: "row",
    gap: 24,
  },
  descricaoKey: {
    fontSize: 14,
    fontWeight: "900",
    color: "rgba(0,0,0,0.4)",
    letterSpacing: 1,
  },
  descricaoValue: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
  palavraChaveDiv: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  palavraChave: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 8,
  },
  comentarioInputContainer: {
    borderWidth: 2,
    width: 356,
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
  divComentario: {
    backgroundColor: "#FFE8E8",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 18,
    padding: 24,
    width: "100%",
    height: 100,
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
});
