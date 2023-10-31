import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const InfoPage: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}
        >
          <Text style={{ fontSize: 18 }}>
            Título: Informações Importantes{"\n"}
            Data: 10 de outubro de 2023{"\n"}
            Conteúdo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam at quam ac dolor finibus volutpat. Vivamus tristique leo non
            bibendum. Integer feugiat velit in sapien congue, et dignissim justo
            euismod.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoPage;
