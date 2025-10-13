import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Componentes
import InputSearch from "@/src/Components/inputSearch";

// Icones
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>BIBLIOFZS</Text>
          <TouchableOpacity style={styles.btnNotification}>
            <Ionicons name="notifications-outline" size={24} color="#B9030F" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headline}>Bem-Vindo, David!</Text>
        <InputSearch />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  scrollContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
    width: "100%",
    height: "100%",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "semibold",
  },

  headline: {
    marginTop: "12%",
    marginBottom: "6%",
    fontSize: 24,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },

  btnNotification: {},
});
