import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import TabRoutes from "./tab.routes";
import SignOutPage from "../pages/SignOut";
import FeedbackPage from "../pages/Feedback";

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Atividade RN"
      component={TabRoutes}
      options={{
        drawerLabel: "Início",
        drawerIcon: () => <Icon size={20} name={"home"} color={"black"} />,
      }}
    />
    <Drawer.Screen name="SignOut" component={SignOutPage} />
    <Drawer.Screen name="Feedback" component={FeedbackPage} />
  </Drawer.Navigator>
);

export default AppRoutes;
