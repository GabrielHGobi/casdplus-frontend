import React, { useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Context as StudentContext } from "../context/StudentContext";

const Header = ({ title, textStyle }) => {
  const { state } = useContext(StudentContext);
  let logo;
  state.is_casdinho
    ? (logo = require("../../assets/logo_casdinho.png"))
    : (logo = require("../../assets/logo_casdvest.png"));
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={logo} style={styles.logo} />
      <Text style={[styles.title, textStyle]}>{title}</Text>
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
