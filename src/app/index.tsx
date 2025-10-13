import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  function goLogin() {
    router.push("/login");
  }

  function goDashboard() {
    router.push("/dashboard");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, :D</Text>
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
