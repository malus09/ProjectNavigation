import Dashboard from "../pages/Dashboard"; // Importa o componente Dashboard da pasta de páginas
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilPage from "../pages/Profile";
import InfoPage from "../pages/Info/index";
import Icon from "react-native-vector-icons/FontAwesome";
import tabMain from "../components/(tabs)/tabStyles";

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator screenOptions={tabMain.screenOptions}>
    <Tab.Screen
      name="Bem Vindo"
      component={Dashboard}
      options={{
        tabBarIcon: () => <Icon size={20} name={"home"} color={"white"} />,

      }}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon size={20} name={"user"} color={"white"} />,
      }}
      name="Perfil"
      component={PerfilPage}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon size={20} name={"info"} color={"white"} />,
      }}
      name="Info"
      component={InfoPage}
    />
  </Tab.Navigator>
);

export default TabRoutes; // Exporta o componente AppRoutes para ser usado em outros lugares do aplicativo
