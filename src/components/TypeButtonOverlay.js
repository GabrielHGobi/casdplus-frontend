import React, { useContext } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Overlay } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const sign_error_icon = require("../../assets/sign_error_icon.png");

const TypeButtonOverlay = ({ onBackdropPressFunction }) => {
  const { state } = useContext(AuthContext);

  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={() => onBackdropPressFunction()}
        overlayStyle={styles.overlay}>
        <Image source={sign_error_icon} style={{ marginTop: 15 }} />
        <Text style={styles.upperText}>{state.errorMessage}</Text>
        <Text style={styles.lowerText}>
          Tente novamente ou contate a diretoria do CASD.
        </Text>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: 300,
    height: 300,
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

export default TypeButtonOverlay;
