import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 32,
    paddingTop: 16,
  },
  pre: {
    alignSelf: "center",
    marginTop: -16,
    marginBottom: 16,
  },
  mainImage: {
    width: WINDOW_WIDTH,
    height: 200,
  },
  main: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 14,
    fontWeight: "400",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "600",
  },
  mediaImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginRight: 16,
  },
  detailPoint: {
    fontSize: 15,
    fontWeight: "400",
  },
  facilitiesContainer: {
    flex: 0.5,
  },
  facilitiesIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
