import React, { createContext, useState, useEffect } from "react";

// Importações de módulos e serviços
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definição das propriedades passadas para o componente
interface Props {
  children?: React.ReactNode;
}

// Definição da interface do contexto de autenticação
interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
  
}

// Criação do contexto de autenticação
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Componente de provedor de autenticação
export const AuthProvider: React.FC<Props> = ({ children }) => {
  // Estados para o usuário e o loading
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  // Efeito que carrega os dados do armazenamento local no início
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RnAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RnAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  // Função para efetuar o login
  async function signIn() {
    setLoading(true);
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem("@RnAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@RnAuth:token", response.token);

    setLoading(false);
  }

  // Função para efetuar o logout
  function signOut() {
    setLoading(true);

    setTimeout(() => {
      AsyncStorage.clear().then(() => {
        setUser(null);
        setLoading(false);
      });
    }, 2000);
  }

  // Renderização do provedor de contexto
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
