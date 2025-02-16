import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  views: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  label: {
    width: 100,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    borderRadius: 5,
    width: 250,
    color: "black",
    backgroundColor: "#d3d3d3",
  },
  radios: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    width: 250,
  },
  radio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailView: {
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});

export default styles;
