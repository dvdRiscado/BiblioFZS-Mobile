import { Button } from "@/src/Components/button";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import "react-native-gesture-handler";

export default function Home() {
  function goRegister() {
    console.log("foi ao cadastro");
    router.push("/register");
  }

  function goLogin() {
    console.log("foi ao login");
    router.push("/login");
  }

  function goDashboard() {
    console.log("foi ao dashboard");
    router.push("/(tabs)/dashboard");
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>BIBLIOFZS</Text>
        <Text style={styles.subtitulo}>
          O aplicativo da biblioteca da Fatec Zona Sul
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/fundo.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Entrar" onPress={goLogin} />
        <TouchableOpacity style={styles.button} onPress={goRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goDashboard}>
          <Text style={styles.buttonText}>Atalho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 48,
    paddingVertical: 96,
    paddingHorizontal: 24,
  },
  titleContainer: {},
  titulo: {
    textAlign: "center",
    fontSize: 48,
    color: "#B9030F",
    fontWeight: "bold",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 16,
    color: "#707070",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 15,
    aspectRatio: undefined,
  },
  buttonContainer: {
    gap: 8,
    alignItems: "center",
  },
  button: {
    height: 45,
    width: "80%",
    borderRadius: 16,
    backgroundColor: "#161917",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
});
