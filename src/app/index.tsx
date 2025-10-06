import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  function goLogin(){
    console.log('foi pro login')
    router.navigate('/login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, :D</Text>
      <Button onPress={goLogin} title="Ir para Login"></Button>
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
    fontSize:32,
    fontWeight: "bold",

  }
});
