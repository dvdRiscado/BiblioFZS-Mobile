import StoreFavorites from "@/assets/json/book_favorit.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "book_favorit";

// Função para EXCLUIR os dados
export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log("Favoritos excluídos do AsyncStorage.");
  } catch (error) {
    console.log("Erro ao excluir favoritos:", error);
  }
};

// Função para CARREGAR os dados
export const loadFavorites = async ({ setFavorites }: any) => {
  try {
    const favoritos = await AsyncStorage.getItem(STORAGE_KEY);
    if (favoritos !== null) {
      setFavorites(JSON.parse(favoritos));
      console.log(
        "Favoritos iniciais carregados do AsyncStorage.",
        JSON.parse(favoritos)
      );
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(StoreFavorites));
      setFavorites(StoreFavorites);
      console.log("Favoritos iniciais carregados do JSON.", StoreFavorites);
    }
  } catch (error) {
    console.log("Erro ao carregar favoritos:", error);
  }
};

// Função para ENVIAR a qtd de favoritos
export async function sendQntFavoritos({ favorites, setQtdFavoritos }: any) {
  console.log("sendQntFavoritos chamado");
  if (!favorites) return;

  const qtd = favorites.filter((fav: any) => fav.favorito).length;
  setQtdFavoritos(qtd);
  console.log("Quantidade de favoritos enviada:", qtd);
}

// Função para ENVIAR o status de um livro
export async function sendIsFavorito({ favorites, setIsFavorito, id }: any) {
  if (!favorites) return;

  const bookIndex = favorites.findIndex((fav: any) => fav.id === id.toString());

  if (bookIndex !== -1) {
    setIsFavorito(favorites[bookIndex].favorito);
    console.log("Status de favorito enviado:", favorites[bookIndex].favorito);
  }
}

// Função para ALTERAR o status de favorito
export async function toggleFavorito({
  favorites,
  book,
  setIsFavorito,
  setFavorites,
}: any) {
  if (!favorites) return;

  // Cria uma cópia do array de favoritos
  let favoritosArray = [...favorites];
  console.log("Favoritos Antes da Alteração:", favoritosArray);

  // Verifica se o livro já está nos favoritos
  const bookIndex = favoritosArray.findIndex(
    (fav: any) => fav.id === book.id.toString()
  );

  if (bookIndex !== -1) {
    // Livro já existe, alterna o status
    favoritosArray[bookIndex].favorito = !favoritosArray[bookIndex].favorito;
    setIsFavorito(favoritosArray[bookIndex].favorito);
    console.log(
      "Livro encontrado. Novo status de favorito:",
      favoritosArray[bookIndex].favorito
    );
    console.log("Favoritos Após a Alteração:", favoritosArray);
  }

  // Salva o array atualizado no AsyncStorage
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoritosArray));
    console.log("Sucesso, favoritos salvos:", favoritosArray);
    setFavorites(favoritosArray);
    console.log("Favoritos Atualizados no Estado:", favoritosArray);
  } catch (error) {
    console.log("Erro ao salvar favoritos:", error);
  }
}
