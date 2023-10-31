import { StyleSheet, Platform } from "react-native";

const shadowStyle = Platform.select({
  ios: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  android: {
    elevation: 5,
  },
});

const signInStyles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  elements: {
    height: "90%",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 16,
  },

  buttonBox: {
    alignSelf: "center",
    height: "8%",
    width: "90%",
  },
  inputLabel: { color: "#d6d6d6" },
  buttonStyle: {
    backgroundColor: "#4494BE",
    borderRadius: 9,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    alignSelf: "center",
    ...shadowStyle,
    marginBottom: 10,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 8,
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default signInStyles;
