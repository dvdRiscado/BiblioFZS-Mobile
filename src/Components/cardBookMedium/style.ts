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
  },
  image: {
    width: "95%",
    aspectRatio: undefined,
    marginTop: -50,
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
  progressBarContainer: {
    width: "100%",
    marginTop: 4,
    marginBottom: 10,
  },
  progressBar: {
    width: "100%",
    borderColor: "#c7c7c7ff",
    borderWidth: 4,
    borderRadius: 20,
  },
  progressPercent: {
    position: "absolute",

    borderColor: "gray",
    borderWidth: 4,
    borderRadius: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "medium",
  },
});
