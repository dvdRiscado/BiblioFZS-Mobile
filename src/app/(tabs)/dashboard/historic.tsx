import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/src/Components/header";
import { OptionSection } from "@/src/Components/optionSection";

export default function Historic() {
  const [section, setSection] = useState("reserva");

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
            qtd={2}
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
    marginTop: "8%",
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
});
