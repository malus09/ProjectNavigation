import React from "react";
import SignInPage from "../pages/SignIn"; // Importa o componente SignInPage da pasta de páginas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/Home";


const AuthStack = createNativeStackNavigator(); // Cria um navegador de pilha usando o React Navigation

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Home">
    <AuthStack.Screen name="Home" component={HomePage} />

    <AuthStack.Screen
      name="SignIn"
      component={SignInPage}
      options={{ headerBackVisible: true, headerBackTitle: "Voltar" }}
    />

  </AuthStack.Navigator>
);

export default AuthRoutes; // Exporta o componente AuthRoutes para ser usado em outros lugares do aplicativo
