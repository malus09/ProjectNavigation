import Dashboard from '../pages/Dashboard'; // Importa o componente Dashboard da pasta de páginas
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppStack = createNativeStackNavigator(); // Cria um navegador de pilha usando o React Navigation

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: "HomeScreen", }}
    />
  </AppStack.Navigator>
);

export default AppRoutes; // Exporta o componente AppRoutes para ser usado em outros lugares do aplicativo
