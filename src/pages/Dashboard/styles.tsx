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
const dashboardStyles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F3F4",
  },
  elements: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
  },
  scrollView: {
    maxHeight:250,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },
  textScroll: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonBox: {
    alignSelf: "center",
    width: "100%",
  },
  buttonStyle: {
    backgroundColor: "#4494BE",
    borderRadius: 16,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    ...shadowStyle,
    marginBottom: 10,
  },
});

export default dashboardStyles;
