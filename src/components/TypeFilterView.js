import React from "react";
import { View, Text } from "react-native";

const TypeFilterView = ({ label_id }) => {
  var filterStyle = {
    width: 80,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "white",
  };
  var text = "";
  var textStyle = {
    fontSize: 12,
    fontFamily: "MontserratRegular",
  };
  switch (label_id) {
    case 1: {
      filterStyle = { ...filterStyle, backgroundColor: "#D1FEBC" };
      text = "Evento";
      break;
    }
    case 2: {
      filterStyle = { ...filterStyle, backgroundColor: "#FFC5B2" };
      text = "Horário";
      break;
    }
    case 3: {
      filterStyle = { ...filterStyle, backgroundColor: "#F9B342" };
      text = "Material";
      break;
    }
    case 4: {
      filterStyle = { ...filterStyle, backgroundColor: "#B4B2FF" };
      text = "Simulado";
      break;
    }
    case 5: {
      filterStyle = { ...filterStyle, backgroundColor: "#FF6431" };
      text = "Vestibular";
      break;
    }
    case 6: {
      filterStyle = { ...filterStyle, backgroundColor: "#45ECCE" };
      text = "Outros";
      break;
    }
    default:
      textStyle = { ...textStyle, fontSize: 16 };
      text = "Tipo";
      break;
  }

  return (
    <View style={filterStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default TypeFilterView;
