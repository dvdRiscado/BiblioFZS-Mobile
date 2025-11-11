import InputText from "@/src/Components/inputText";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../Components/button";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function EditProfile() {
  const [name, setName] = useState("David");
  const [lastname, setLastName] = useState("Vasconcelos Torquato");
  const [email, setEmail] = useState("david.torquato@fatec.sp.gov.br");
  const [number, setNumber] = useState("(11)94002-8922");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
    >
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.photoContainer}>
          <View style={styles.photoCard}>
            <Image
              style={styles.photo}
              source={require("@/assets/images/perfil_teste.png")}
            />
          </View>
          <TouchableOpacity style={styles.btnCam}>
            <FontAwesome name="camera" size={24} color="#B9030F" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nome</Text>
          <InputText
            value={name}
            onChangeText={(value) => setName(value)}
            inputMode="text"
          />
          <Text style={styles.label}>Sobrenome</Text>
          <InputText
            value={lastname}
            onChangeText={(value) => setLastName(value)}
            inputMode="text"
          />
          <Text style={styles.label}>Email</Text>
          <InputText
            value={email}
            inputMode="email"
            onChangeText={(value) => setEmail(value)}
          />
          <Text style={styles.label}>Telefone</Text>
          <InputText
            value={number}
            onChangeText={(value) => setNumber(value)}
            inputMode="tel"
          />
        </View>
        <Button text="Salvar Alterações" onPress={console.log("clicado")} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  photoContainer: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  photoCard: {
    width: 200,
    height: 200,

    borderRadius: 200,
    borderColor: "#B9030F",
    borderWidth: 3,
    marginBottom: 12,
  },
  photo: {
    width: "100%",
    height: "100%",
    aspectRatio: undefined,
    borderRadius: 100,
  },
  btnCam: {
    position: "absolute",
    bottom: 34,
    right: "28%",

    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#B9030F",
    backgroundColor: "#ececec",
  },
  infoContainer: {
    marginBottom: 32,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
