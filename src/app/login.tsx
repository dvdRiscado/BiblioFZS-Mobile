import { Button } from "@/src/Components/button";
import { InputIconText } from "@/src/Components/inputIconText";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const [password, setPassword] = useState("");

  function goDashboard() {
    router.push("/(tabs)/dashboard");
  }

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
        <InputIconText
          type="email"
          placeholder="email@fatec.sp.gov.br"
        ></InputIconText>
        <InputIconText
          type="password"
          placeholder="********"
          onChangeText={(text) => changePassword(text)}
          value={password}
        ></InputIconText>
        <Text>Esqueceu a senha?</Text>
      </View>
      <Button text="Entrar >" onPress={goDashboard} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 24,
    gap: 32,
    backgroundColor: "#FFF",
  },
  titulo: {
    fontSize: 48,
    color: "#B9030F",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#707070",
  },
});
