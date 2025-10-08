import { StyleSheet, Text, View } from "react-native";

export default function Historic() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Histórico</Text>
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
