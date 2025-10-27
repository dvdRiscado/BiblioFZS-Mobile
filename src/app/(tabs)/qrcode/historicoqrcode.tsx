import { ScrollView, StyleSheet, Text, View } from "react-native";
import Presenca from "../../../Components/presenca";

export default function HistoricoQrCode() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headline}>Histórico</Text>
        <View style={styles.presencaContainer}>
          <Presenca />
          <Presenca />
          <Presenca />
          <Presenca />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "100%",
    marginHorizontal: 32,
  },
  presencaContainer: {
    gap: 16,
  },
  headline: {
    marginTop: "8%",
    marginBottom: "4%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnVoltar: {
    width: "auto",
    height: 56,
    backgroundColor: "#B9030F",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnVoltarTexto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
