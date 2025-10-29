import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "black",
    width: "auto",
  },
});
