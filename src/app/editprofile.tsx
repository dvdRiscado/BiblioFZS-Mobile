import { UsuarioContext } from "@/context/UsuarioContext";
import { useUser } from "@/hooks/useUser";
import InputText from "@/src/Components/inputText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useContext, useState } from "react";
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

export default function EditProfile() {
  const { atualizarUsuario } = useUser();
  const ctx = useContext(UsuarioContext);
  const [name, setName] = useState(ctx!.user!.nome);
  const [lastname, setLastName] = useState(ctx!.user!.sobrenome);
  const [email, setEmail] = useState(ctx!.user!.email);
  const [msg, setMsg] = useState("");
  // const [number, setNumber] = useState(ctx!.user!.tel);

  const updateUser = () => {
    try {
      const formDados = {
        nome: name,
        sobrenome: lastname,
        email: email,
      };
      atualizarUsuario(formDados);
      setMsg(`Aluno atualizado com sucesso!`);
    } catch (e) {
      setMsg(`Erro na atualização do aluno: ${e}`);
    }
    // console.log(ctx!.token!, formDados);
  };

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
          {/* <Text style={styles.label}>Telefone</Text>
          <InputText
            value={number}
            onChangeText={(value) => setNumber(value)}
            inputMode="tel"
          /> */}
        </View>
        <Button text="Salvar Alterações" onPress={updateUser} />
        <View style={styles.msgView}>
          <Text style={styles.msg}>{msg}</Text>
        </View>
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
  msgView: {
    width: "100%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  msg: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});
