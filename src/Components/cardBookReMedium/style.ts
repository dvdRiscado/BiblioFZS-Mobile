import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: "100%",
    paddingBottom: 4,
    display: "flex",
    flexDirection: "row",
    height: 220,
    marginBottom: 15,
  },
  imageContainer: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  image: {
    width: "95%",
    height: "100%",
    aspectRatio: undefined,
  },
  infoContainer: {
    width: "60%",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  titleContainer: {},
  headline: {
    fontSize: 20,
    fontWeight: "semibold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
  },
  progressContainer: {
    paddingRight: 10,
  },
  caption: {
    fontSize: 12,
  },
  button: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#B9030F",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: "medium",
  },
});
