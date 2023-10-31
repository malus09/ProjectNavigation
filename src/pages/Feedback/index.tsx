// FeedbackScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const FeedbackPage: React.FC = () => {
  const [feedback, setFeedback] = useState("");

  function handleSubmitFeedback() {
    alert("Feedback enviado: " + feedback);
    setFeedback(""); // Limpe o campo de feedback após o envio
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Envie seu feedback:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginVertical: 10,
        }}
        placeholder="Digite seu feedback aqui"
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
        multiline
      />
      <Button title="Enviar Feedback" onPress={handleSubmitFeedback} />
    </View>
  );
};

export default FeedbackPage;
