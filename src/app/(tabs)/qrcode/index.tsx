import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function QrCode() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.messageContainer}>
          <View style={styles.message}>
            <Image source={require("@/assets/images/img/qrcode.png")}></Image>
            <Text style={styles.texto}>
              Aponte a câmera do seu celular para ler o QR code e confirmar sua
              presença!
            </Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotao}>Vamos lá</Text>
              <FontAwesome name="arrow-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image source={require("@/assets/images/img/qrcode.png")}></Image>
      <TouchableOpacity style={styles.botao}>
        <MaterialCommunityIcons name="border-radius" size={24} color="white" />
        <Text style={styles.textoBotao}>Ler QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101010",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  botao: {
    backgroundColor: "#B9030F",
    width: "80%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  navContainer: {
    backgroundColor: "#333333",
    width: 356,
    height: 100,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 84,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  textoItem: {
    color: "#fff",
    fontSize: 16,
  },
  texto: {
    color: "#fff",
    margin: 48,
    textAlign: "center",
    fontSize: 18,
  },
  messageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  message: {
    backgroundColor: "#333333",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
