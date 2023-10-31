import React, { useContext, useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import signInStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../../contexts/auth";
import { color } from "@rneui/themed/dist/config";

const SignInPage: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSignIn = () => {
    if (email === "malu@gmail.com" && senha === "123456") {
      signIn();
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  };

  return (
    <SafeAreaView style={signInStyles.container}>
      <StatusBar />
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={signInStyles.elements}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={signInStyles.logo}
          />
          <View style={signInStyles.buttonBox}>
            <TextInput
              style={signInStyles.textInput}
              placeholder="Email"
              placeholderTextColor="#d6d6d6"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={signInStyles.textInput}
              placeholder="Senha"
              placeholderTextColor="#d6d6d6"
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity
              style={signInStyles.buttonStyle}
              onPress={handleSignIn}
            >
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

            <Text style={signInStyles.inputLabel}>
              Email (malu@gmail.com) e senha (123456)
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInPage;
