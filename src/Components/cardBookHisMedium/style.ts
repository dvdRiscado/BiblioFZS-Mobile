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
  options: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 8,
    justifyContent: "flex-end",
  },
  label: {
    fontWeight: "semibold",
    fontSize: 13,
  },
  info: {
    paddingLeft: 10,
    paddingVertical: 1,
    fontSize: 14,
  },
  largeButton: {
    height: "100%",
    paddingTop: 3,
    paddingLeft: 2,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  button: {
    padding: 2,
  },
});
