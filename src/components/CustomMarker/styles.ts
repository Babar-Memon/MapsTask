import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#FF5A5F",
    padding: 2,
    borderRadius: 3,
    borderColor: "#D23F44",
    borderWidth: 0.5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  arrow: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: "#FF5A5F",
    alignSelf: "center",
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: "#D23F44",
    alignSelf: "center",
    marginTop: -0.5,
  },
});

export default styles;
