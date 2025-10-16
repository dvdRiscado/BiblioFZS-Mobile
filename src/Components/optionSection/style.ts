import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  botaoAtivado: {
    backgroundColor: "#121921",
    borderRadius: 100,
    width: "auto",
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 22,
    fontSize: 14,
  },
  botaoDesativado: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    width: "auto",
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 22,
    fontSize: 14,
  },
  textoBotaoAtivado: {
    color: "#FFF",
    fontWeight: "700",
  },
});
