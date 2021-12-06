import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Context as NoticesContext } from "../context/NoticesContext";
import { Overlay } from "react-native-elements";
import DateInput from "./DateInput";

const DateFilterOverlay = ({
  onBackdropPressFunction,
  changeInitialDate,
  ChangeFinalDate,
  initialDate,
  finalDate,
  setCheckChangeDate,
  checkChangeDate,
}) => {
  const calendar_img = require("../../assets/ferramenta-de-simbolo-de-interface-de-calendario.png");
  const { state, setDates } = useContext(NoticesContext);
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={onBackdropPressFunction}
        overlayStyle={styles.overlay}>
        <Text style={styles.upperText}>Selecione as datas para filtrar:</Text>
        <View style={styles.dateContainer}>
          <DateInput
            date={initialDate}
            setDate={changeInitialDate}
            placeholder='Data inicial'
          />
          <DateInput
            date={finalDate}
            setDate={ChangeFinalDate}
            placeholder='Data final'
          />
        </View>
        <Image source={calendar_img} style={styles.image} />
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
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    marginTop: 10,
    width: "35%",
    height: "35%",
    borderRadius: 10,
  },
  cleanButton: {
    backgroundColor: "#F9F9F4",
    borderRadius: 10,
    marginTop: 10,
    height: 30,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  stylesContainer: {
    marginHorizontal: 50,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },

  tipoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    width: 100,
    height: 35,
  },
});

export default DateFilterOverlay;
