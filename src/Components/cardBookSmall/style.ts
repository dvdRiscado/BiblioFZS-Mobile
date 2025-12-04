import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ececec",
    borderRadius: 5,
    width: "49.5%",
    paddingBottom: 4,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 255,
    width: "100%",
  },
  image: {
    width: "95%",
    height: "100%",
    aspectRatio: undefined,
    marginTop: -22,
    marginBottom: -28,
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    width: "100%",
    height: 40,
    textAlign: "left",
    paddingHorizontal: 4,
  },

  info: {
    justifyContent: "space-between",
    width: "100%",
    height: 70,
  },
  infoptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 3,
    paddingHorizontal: 4,
  },
  options: {
    flexDirection: "row",
    gap: 3,
  },
  rating: {
    flexDirection: "row",
  },
  button: {
    padding: 2,
  },
});
