import StoreReservs from "@/assets/json/book_reserv.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const STORAGE_KEY = "book_reserv";

// Função para EXCLUIR todos os dados de reservas
export const clearReservs = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log("Dados de reservas excluídos com sucesso.");
  } catch (error) {
    console.log("Erro ao excluir dados de reservas:", error);
  }
};

// Função para CARREGAR os dados
export const loadReservs = async ({ setReservs }: any) => {
  try {
    const reservados = await AsyncStorage.getItem(STORAGE_KEY);
    if (reservados !== null) {
      setReservs(JSON.parse(reservados));
      console.log(
        "Reservas iniciais carregadas do AsyncStorage.",
        JSON.parse(reservados)
      );
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(StoreReservs));
      setReservs(StoreReservs);
      console.log("Reservas iniciais carregadas do JSON.", StoreReservs);
    }
  } catch (error) {
    console.log("Erro ao carregar reservas:", error);
  }
};

// Função para ENVIAR a qtd de livros reservados
export async function sendQntReservados() {
  try {
    const reservados = await AsyncStorage.getItem(STORAGE_KEY);
    if (reservados !== null) {
      const reservsArray = JSON.parse(reservados);
      const qntReservados = reservsArray.filter(
        (res: any) => res.reservado
      ).length;
      console.log("Quantidade de livros reservados enviada:", qntReservados);
      return qntReservados;
    }
  } catch (error) {
    console.log("Erro ao enviar quantidade de livros reservados:", error);
  }
  return 0;
}

// Função para ENVIAR o status de um livro
export async function sendIsReservado({ id }: any) {
  try {
    const reservados = await AsyncStorage.getItem(STORAGE_KEY);
    if (reservados !== null) {
      const reservsArray = JSON.parse(reservados);
      const bookIndex = reservsArray.findIndex(
        (res: any) => res.id === id.toString()
      );

      if (bookIndex !== -1) {
        console.log(
          "Status de reservado enviado:",
          reservsArray[bookIndex].reservado
        );
        return reservsArray[bookIndex].reservado;
      }
    }
  } catch (error) {
    console.log("Erro ao enviar status de reservado:", error);
  }
  return false;
}

// Função para ALTERAR o status de reservado para TRUE
export async function setReservadoTrue({ reservs, book, setReservs }: any) {
  if (!reservs) return;

  // Cria uma cópia do array de reservas
  let reservadosArray = [...reservs];
  console.log("Reservas Antes da Alteração:", reservadosArray);

  // Verifica se o livro já está nas reservas
  const bookIndex = reservadosArray.findIndex(
    (res: any) => res.id === book.id.toString()
  );
  console.log("Índice do Livro nas Reservas:", bookIndex);

  if (bookIndex !== -1) {
    // Livro já existe, define o status como true
    if (!reservadosArray[bookIndex].reservado) {
      reservadosArray[bookIndex].reservado = true;
      console.log(
        "Status de reservado alterado para true:",
        reservadosArray[bookIndex].reservado
      );
      Alert.alert("Atenção", "Livro foi reservado!", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "default",
        },
      ]);
    } else {
      Alert.alert("Atenção", "Livro já está reservado!", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "default",
        },
      ]);
    }
  } else {
    // Livro não existe, adiciona ao array com status reservado como true
    reservadosArray.push({
      id: book.id.toString(),
      reservado: true,
      espera: false,
      dias: 3,
    });
    console.log("Livro adicionado às reservas:", {
      id: book.id.toString(),
      reservado: true,
    });
  }
  // Atualiza o estado e o AsyncStorage
  setReservs(reservadosArray);
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reservadosArray));
    console.log("Reservas Atualizadas no AsyncStorage:", reservadosArray);
  } catch (error) {
    console.log("Erro ao atualizar reservas no AsyncStorage:", error);
  }
}

// Função para ALTERAR o status de reservado para FALSE
export async function setReservadoFalse({ reservs, book, setReservs }: any) {
  if (!reservs) return;

  // Cria uma cópia do array de reservas
  let reservadosArray = [...reservs];
  console.log("Reservas Antes da Alteração:", reservadosArray);

  // Verifica se o livro já está nas reservas
  const bookIndex = reservadosArray.findIndex(
    (res: any) => res.id === book.id.toString()
  );
  console.log("Índice do Livro nas Reservas:", bookIndex);

  if (bookIndex !== -1) {
    // Livro já existe, define o status como false
    if (reservadosArray[bookIndex].reservado) {
      reservadosArray[bookIndex].reservado = false;
      console.log(
        "Status de reservado alterado para false:",
        reservadosArray[bookIndex].reservado
      );
      Alert.alert("Atenção", "Livro foi desreservado!", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "default",
        },
      ]);
    } else {
      Alert.alert("Atenção", "Livro já está desreservado!", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "default",
        },
      ]);
    }
  } else {
    // Livro não existe, adiciona ao array com status reservado como false
    reservadosArray.push({
      id: book.id.toString(),
      reservado: false,
      espera: false,
      dias: 3,
    });
    console.log("Livro adicionado às reservas:", {
      id: book.id.toString(),
      reservado: false,
    });
  }
  // Atualiza o estado e o AsyncStorage
  setReservs(reservadosArray);
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reservadosArray));
    console.log("Reservas Atualizadas no AsyncStorage:", reservadosArray);
  } catch (error) {
    console.log("Erro ao atualizar reservas no AsyncStorage:", error);
  }
}

// Função para ALTERAR o status de reservado
export async function toggleReservado({
  reservs,
  book,
  setIsReservado,
  setReservs,
}: any) {
  if (!reservs) return;

  // Cria uma cópia do array de reservas
  let reservadosArray = [...reservs];
  console.log("Reservas Antes da Alteração:", reservadosArray);

  // Verifica se o livro já está nas reservas
  const bookIndex = reservadosArray.findIndex(
    (res: any) => res.id === book.id.toString()
  );
  console.log("Índice do Livro nas Reservas:", bookIndex);

  if (bookIndex !== -1) {
    // Livro já existe, alterna o status
    reservadosArray[bookIndex].reservado =
      !reservadosArray[bookIndex].reservado;
    setIsReservado(reservadosArray[bookIndex].reservado);
    console.log(
      "Status de reservado alterado:",
      reservadosArray[bookIndex].reservado
    );
  } else {
    // Livro não existe, adiciona ao array com status reservado como true
    reservadosArray.push({ ...book, reservado: true });
    console.log("Livro adicionado às reservas:", { ...book, reservado: true });
  }

  // Retorna uma Alerta informando o status atual
  Alert.alert(
    "Atenção",
    reservadosArray[bookIndex]?.reservado
      ? "Livro foi reservado!"
      : "Livro foi desreservado!",
    [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "default",
      },
    ]
  );

  // Atualiza o estado e o AsyncStorage
  setReservs(reservadosArray);
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reservadosArray));
    console.log("Reservas Atualizadas no AsyncStorage:", reservadosArray);
  } catch (error) {
    console.log("Erro ao atualizar reservas no AsyncStorage:", error);
  }
}
