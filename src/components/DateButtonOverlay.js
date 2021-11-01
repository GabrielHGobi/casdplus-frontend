import React from "react";
import { StyleSheet, Text, View,TouchableOpacity  } from "react-native";
import { Overlay } from "react-native-elements";


const DateButtonOverlay = ({onBackdropPressFunction}) => {
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={() => {onBackdropPressFunction(false)}}
        overlayStyle={styles.overlay}>
        <Text style={styles.upperText}>Selecione o Data para filtrar:</Text>
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
    fontFamily: "MontserratSemiBold",
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 6,
    textAlign: "center",
  },
  
});

export default DateButtonOverlay;
