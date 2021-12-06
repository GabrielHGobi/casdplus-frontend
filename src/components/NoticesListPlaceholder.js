import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const NoticesListPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/thinking_albertinho.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Nenhuma mensagem por aqui...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 150,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: "MontserratRegular",
  },
});

export default NoticesListPlaceholder;
