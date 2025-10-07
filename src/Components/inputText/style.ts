import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  input: {
    width: "100%",
    height: 64,
    marginTop: 3,
    fontSize: 18,
    paddingLeft: 48,
  },
  icon: {
    position: "absolute",
    left: 10,
    zIndex: 1,
    padding: 5,
  },
});
