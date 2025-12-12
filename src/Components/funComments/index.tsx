import StoreComments from "@/assets/json/book_comment.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const STORAGE_KEY = "book_comment";

// Função para EXCLUIR os dados
export const clearComments = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log("Comentários excluídos do AsyncStorage.");
  } catch (error) {
    console.log("Erro ao excluir comentários:", error);
  }
};

// Função para CARREGAR os dados
export const loadComments = async ({ setComments }: any) => {
  try {
    const comentarios = await AsyncStorage.getItem(STORAGE_KEY);
    if (comentarios !== null) {
      setComments(JSON.parse(comentarios));
      console.log(
        "Comentários iniciais carregados do AsyncStorage.",
        JSON.parse(comentarios)
      );
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(StoreComments));
      setComments(StoreComments);
      console.log("Comentários iniciais carregados do JSON.", StoreComments);
    }
  } catch (error) {
    console.log("Erro ao carregar comentários:", error);
  }
};

// Função para ENVIAR os comentários de um livro
export async function sendComments({ comments, setBookComments, id }: any) {
  if (!comments) return;

  const bookComments = comments.filter(
    (comment: any) => comment.bookId === id.toString()
  );

  setBookComments(bookComments);
  console.log("Comentários enviados para o livro:", bookComments);
}

// Função para ADICIONAR um novo comentário
export async function addComment({
  comments,
  book,
  newComment,
  newRating,
  setComments,
  setBookComments,
}: any) {
  if (!comments) return;

  // Cria uma cópia do array de comentários
  let comentariosArray = [...comments];
  console.log("Comentários Antes da Adição:", comentariosArray);

  // Cria um novo comentário
  const commentToAdd = {
    id: (comentariosArray.length + 1).toString(),
    bookId: book.id.toString(),
    comentario: newComment,
    rating: newRating,
    nome: "Usuário",
    // date nesse formato: "02 Fevereiro 2022" em String
    data: new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  // Adiciona o novo comentário ao array
  comentariosArray.push(commentToAdd);
  setComments(comentariosArray);
  console.log("Novo comentário adicionado:", commentToAdd);

  // Atualiza os comentários do livro atual
  const bookComments = comentariosArray.filter(
    (comment: any) => comment.bookId === book.id.toString()
  );
  setBookComments(bookComments);
  console.log("Comentários atualizados para o livro:", bookComments);

  // Salva os comentários atualizados no AsyncStorage
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(comentariosArray));
    console.log("Comentários salvos no AsyncStorage.");
  } catch (error) {
    console.log("Erro ao salvar comentários:", error);
  }

  // Gera um Alerta de Sucesso
  Alert.alert(
    "Comentário Adicionado",
    "Seu comentário foi adicionado com sucesso!"
  );
}
