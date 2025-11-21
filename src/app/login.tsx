import { Button } from "@/src/Components/button";
import { InputIconText } from "@/src/Components/inputIconText";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { InputIconPassword } from "../Components/inputIconPassword";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail(text: string) {
    setEmail(text);
    if (text === "") {
      setEmailError("O email é obrigatório");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setEmailError("Digite um email válido");
    } else {
      setEmailError("");
    }
  }

  function validatePassword(text: string) {
    setPassword(text);
    if (text === "") {
      setPasswordError("A senha é obrigatória");
    } else if (text.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  function goDashboard() {
    console.log("Clicado!");

    if (
      emailError === "" &&
      passwordError === "" &&
      email !== "" &&
      password !== ""
    ) {
      router.push("/(tabs)/dashboard");
    } else {
      validateEmail(email);
      validatePassword(password);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
    >
      <View>
        <Text style={styles.titulo}>Bem Vindo!</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>
      </View>
      <View>
        <InputIconText
          type="email"
          placeholder="email@fatec.sp.gov.br"
          onChangeText={(text) => validateEmail(text)}
          value={email}
        />
        {emailError !== "" && <Text style={styles.caption}>{emailError}</Text>}
        <InputIconPassword
          type="password"
          placeholder="********"
          onChangeText={(text) => validatePassword(text)}
          value={password}
        />
        {passwordError !== "" && (
          <Text style={styles.caption}>{passwordError}</Text>
        )}
        <Text>Esqueceu a senha?</Text>
      </View>
      <Button text="Entrar >" onPress={goDashboard} />
    </KeyboardAvoidingView>
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
  caption: {
    fontSize: 12,
    color: "#B9030F",
    marginLeft: 10,
  },
});
