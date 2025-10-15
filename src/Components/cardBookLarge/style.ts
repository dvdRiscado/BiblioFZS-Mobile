import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  item: {
    width: "55%",
    aspectRatio: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: undefined,
    marginBottom: 5,
  },
  headline: {
    marginTop: "4%",
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
    width: 300,
    textAlign: "center",
  },

  infoptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rating: {
    flexDirection: "row",
  },
  options: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 2,
  },
});
