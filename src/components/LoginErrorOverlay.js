import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Overlay } from "react-native-elements";

const sign_error_icon = require("../../assets/sign_error_icon.png");

const LoginErrorOverlay = ({ visible, toggleOverlay }) => {
  return (
    <>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}>
        <Image source={sign_error_icon} style={{ marginTop: 15 }} />
        <Text style={styles.upperText}>Login e/ou senha inválidos.</Text>
        <Text style={styles.lowerText}>
          Tente novamente ou contate a diretoria do CASD.
        </Text>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: 240,
    height: 240,
    borderRadius: 20,
    alignItems: "center",
    padding: 0,
  },
  upperText: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  lowerText: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
    marginHorizontal: 32,
  },
});

export default LoginErrorOverlay;
