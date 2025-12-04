import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CardBookReMedium from "@/src/Components/cardBookReMedium";
import Header from "@/src/Components/header";
import OptionSection from "@/src/Components/optionSection";

/*
import CardBookMedium from "@/src/Components/cardBookMedium";
*/

import { loadReservs, sendQntReservados } from "@/src/Components/funReservs";
import { books } from "@/src/Components/objStorage";

export default function Historic() {
  const [section, setSection] = useState("reserva");

  const [reservs, setReservs] = useState<any>(null);
  const [qntReservados, setQntReservados] = useState(0);

  const selected = useLocalSearchParams();

  function goDetalhesLivro(id: string) {
    router.push({
      pathname: "/[detalheslivro]",
      params: { detalheslivro: id },
    });
  }

  useFocusEffect(
    useCallback(() => {
      loadReservs({ setReservs });
      sendQntReservados().then(setQntReservados);
      console.log("Reservas carregadas!");
    }, [])
  );

  useEffect(() => {
    if (!selected?.reserve_loan) return;
    const val = String(selected.reserve_loan);
    if (val === "emprestimo") setSection("emprestimo");
    else if (val === "reserva") setSection("reserva");
  }, [selected?.reserve_loan]);

  useEffect(() => {
    sendQntReservados().then(setQntReservados);
  }, [reservs]);

  function changeSection(val: string) {
    setSection(val);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Text style={styles.headline}>Meus Livros</Text>
        <View style={styles.optionContainer}>
          <OptionSection
            onPress={() => {
              changeSection("reserva");
              console.log("reserva");
            }}
            valOn={section}
            valor={"reserva"}
            qtd={qntReservados}
          >
            Reservados
          </OptionSection>
          <OptionSection
            onPress={() => {
              changeSection("emprestimo");
              console.log("emprestimo");
            }}
            valOn={section}
            valor={"emprestimo"}
            qtd={0}
          >
            Emprestados
          </OptionSection>
        </View>

        {section === "emprestimo" ? (
          <View style={styles.booksContainer}>
            <Text style={styles.text}>Nenhum livro emprestado</Text>
            {/*
              <CardBookMedium
              book={books[7]}
              daysLeft={6}
              clicked={() => goDetalhesLivro(books[7].id)}
            />
            */}
          </View>
        ) : (
          <View style={styles.booksContainer}>
            {qntReservados === 0 ? (
              <Text style={styles.text}>Nenhum livro reservado</Text>
            ) : (
              reservs?.map((resv: any) => {
                if (resv.reservado) {
                  const bookInfo = books.find(
                    (b) => b.id.toString() === resv.id.toString()
                  );
                  if (bookInfo) {
                    return (
                      <CardBookReMedium
                        key={bookInfo.id}
                        book={bookInfo}
                        reservs={reservs}
                        setReservs={setReservs}
                        clicked={() => goDetalhesLivro(bookInfo.id)}
                        daysLeft={resv.dias}
                      />
                    );
                  }
                }
              })
            )}
          </View>
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
    width: "100%",
    marginBottom: 110,
  },
  headline: {
    marginBottom: "4%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 30,
    gap: "4%",
  },
  booksContainer: {
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "medium",
    width: "100%",
    textAlign: "center",
    color: "rgba(0,0,0,0.6)",
  },
});
