import { useUser } from "@/hooks/useUser";
import Presenca from "@/src/Components/presenca";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function HistoricoQrCode() {
  const { listarPresencasAlunos } = useUser();
  const [listaPresenca, setListaPresenca] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function carregarPresencas() {
        const presencas = await listarPresencasAlunos();
        // setListaPresenca(presencas?.data);
        // console.log(presencas!.data.id);
        // console.log(listaPresenca);
        setListaPresenca(presencas);
      }
      carregarPresencas();
    }, [])
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headline}>Histórico</Text>
        <View style={styles.presencaContainer}></View>
        {listaPresenca.map((i) => (
          <Presenca key={i.id} dataPresenca={i.datetime_presenca}></Presenca>
        ))}
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
