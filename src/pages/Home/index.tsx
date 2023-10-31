import {
  TouchableOpacity,
  Button,
  Image,
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import homeStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

    return (
      <SafeAreaView style={homeStyles.container}>
        <StatusBar />
        <View style={homeStyles.elements}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={homeStyles.logo}
          />
          <View style={{ flex: 1, justifyContent: "space-evenly" }}>
            <View>
              <Text style={homeStyles.text}>Navigation Project</Text>
              <Text style={homeStyles.subtitle}>Navegação entre telas</Text>
            </View>

            <View style={homeStyles.buttonBox}>
              <TouchableOpacity style={homeStyles.buttonStyle} onPress={navigateToSignIn}>
                <Icon
                  name="sign-in"
                  size={15}
                  style={{ color: "white", marginLeft: 10 }}
                ></Icon>

                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={[homeStyles.buttonStyle, { backgroundColor: "#A3D9F6" }]}
              >
                <Icon
                  name="tasks"
                  size={15}
                  style={{ color: "white", marginLeft: 10 }}
                ></Icon>

                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Cadastro
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
};

export default HomePage;
