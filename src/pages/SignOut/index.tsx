
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../../contexts/auth";

const SignOutPage: React.FC = () => {
   const { signOut } = useContext(AuthContext);

   function handleSignOut() {
     signOut();
   }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tem certeza de que deseja sair?</Text>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default SignOutPage;
