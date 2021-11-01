import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Header = ({ title }) => {
  const logo_casdvest = require("../../assets/logo_casdvest.png");
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={logo_casdvest} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 15,
  },
  title: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    color: "white",
    marginBottom: 30,
  },
});

export default Header;
