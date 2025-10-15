import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161917",
    width: "100%",
    height: 50,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "6%",
    paddingRight: 60,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "#fff",
    width: "100%",
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 50,
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
