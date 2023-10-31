import React, { useContext } from "react";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import dashboardStyles from "./styles";

import AuthContext from "../../contexts/auth";

const Dashboard: React.FC = () => {

  return (
    <SafeAreaView style={dashboardStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4494BE" />
      <View style={dashboardStyles.elements}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={dashboardStyles.logo}
        />
        <ScrollView style={dashboardStyles.scrollView}>
          <Text style={dashboardStyles.textScroll}>
            Desenvolvi um aplicativo que inclui navegação autenticada para
            redirecionar os usuários à tela de login quando não estão
            autenticados, direcionando-os para a tela principal após o login.
            Ainda precisa aprimoramentos para tornar o processo de autenticação
            mais seguro.
          </Text>
          <Text style={dashboardStyles.textScroll}>
            Além disso, implementei a limitação de acesso com base na
            autenticação, garantindo que apenas usuários autenticados possam
            acessar determinadas áreas do aplicativo. Ainda existem
            oportunidades de melhoria na usabilidade.
          </Text>
          <Text style={dashboardStyles.textScroll}>
            Também adicionei um Drawer deslizante que simplifica a navegação do
            usuário, permitindo que eles acessem a tela de SignOut (deslogar) ou a tela de Feedback
            deslizando o dedo ou tocando em ícones de menu. Para fins de
            demonstração, criei um menu inferior com telas genéricas.
          </Text>
          <Text style={dashboardStyles.textScroll}>
            Por fim, configurei a navegação em pilha (Stack Navigation), nas
            rotas disponíveis antes que a autenticação fosse feita. Planejo
            aprimorar essa funcionalidade futuramente, incluindo animações de
            transição.
          </Text>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
