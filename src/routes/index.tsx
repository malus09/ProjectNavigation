import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthContext from "../contexts/auth"; // Importa o contexto de autenticação
import AuthRoutes from "./auth.routes"; // Importa as rotas de autenticação
import AppRoutes from "./drawer.routes";

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext); // Obtém o status de autenticação e carregamento do contexto de autenticação

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"grey"} />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
