import BtnProfile from "@/src/Components/btnProfile";
import HeaderProfile from "@/src/Components/headerProfile";
import TxtTitle from "@/src/Components/txtTitle";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  function toEdit() {
    router.push("/editprofile");
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderProfile />
        <View>
          <View style={styles.divColor} />
          <View style={styles.photoContainer}>
            <View style={styles.photoCard}>
              <Image
                style={styles.photo}
                source={require("@/assets/images/perfil_teste.png")}
              />
            </View>
            <TouchableOpacity style={styles.photoButton} onPress={toEdit}>
              <Text style={styles.textPhotoButton}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <TxtTitle text="O que está procurando?" />
          <BtnProfile text="Favoritos" icon="" />
          <BtnProfile text="Empréstimos" icon="" />
          <BtnProfile text="Reservas" icon="" />
          <BtnProfile text="Histórico" icon="" />
          <TxtTitle text="Opções" />
          <BtnProfile text="Compartilhar App" icon="share" />
          <BtnProfile text="Sair" icon="logout" />
          <TxtTitle text="Preferências" />
          <BtnProfile text="Idioma" icon="language" />
          <BtnProfile text="Modo Escuro" icon="moon" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    width: "100%",
    //  marginBottom: 110,
  },
  divColor: {
    marginTop: -100,
    backgroundColor: "#B9030F",
    height: 120,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  photoContainer: {
    width: "100%",
    position: "absolute",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
  },
  photoCard: {
    width: 150,
    height: 150,

    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 5,
    marginBottom: 12,
  },
  photo: {
    width: "100%",
    height: "100%",
    aspectRatio: undefined,
    borderRadius: 100,
  },
  photoButton: {
    backgroundColor: "#121921",
    borderRadius: 6,
    width: "auto",
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 22,
    fontSize: 14,
  },
  textPhotoButton: {
    color: "white",
    fontWeight: "700",
  },
  optionContainer: {
    paddingTop: 115,
  },
});
