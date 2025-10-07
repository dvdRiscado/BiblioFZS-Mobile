import { Button } from "@/src/Components/button";
import { InputText } from "@/src/Components/inputText";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const [password, setPassword] = useState("");

  function changePassword(text: string) {
    setPassword(text);
    console.log(password);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Bem Vindo!</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>
      </View>
      <View>
        <InputText type="email" placeholder="email@fatec.sp.gov.br"></InputText>
        <InputText
          type="password"
          placeholder="********"
          onChangeText={(text) => changePassword(text)}
          value={password}
        ></InputText>
        <Text>Esqueceu a senha?</Text>
      </View>
      <Button text="Entrar >"></Button>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    gap: 32,
    backgroundColor: "#FFF",
  },
  titulo: {
    fontSize: 48,
    color: "#B9030F",
    // fontFamily: "montserrat",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#707070",
  },
});
