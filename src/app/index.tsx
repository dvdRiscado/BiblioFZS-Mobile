import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  function goRegister() {
    console.log("foi pro cadastro");
    router.push("/register");
  }

  function goLogin() {
    console.log("foi pro login");
    router.push("/login");
  }

  function goDashboard() {
    console.log("foi pro dashboard");
    router.push("/dashboard");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, :D</Text>
      <Button onPress={goRegister} title="ir para Cadastro"></Button>
      <Button onPress={goLogin} title="Ir para Login"></Button>
      <Button onPress={goDashboard} title="Ir para Dashboard"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
