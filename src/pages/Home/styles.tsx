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

const homeStyles = StyleSheet.create({
  logo: {
    marginTop: "20%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  elements: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
  buttonBox: {
    alignSelf: "center",
    height: "8%",
    width: "60%",
  },
  buttonStyle: {
    backgroundColor: "#4494BE",
    borderRadius: 9,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    alignSelf: "center",
    ...shadowStyle,
    marginBottom:10,
  },
});

export default homeStyles;
