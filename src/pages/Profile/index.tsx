import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const PerfilPage: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}
        >
          <Text style={{ fontSize: 18 }}>
            Nome: malu{"\n"}
            Idade: 18{"\n"}
            E-mail: malu@gmail.com{"\n"}
            Interesses: Jogos, Música, Esportes
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilPage;
