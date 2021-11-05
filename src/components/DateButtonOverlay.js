
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { Overlay } from "react-native-elements";
import DateInput from "../components/DateInput";

const DateButtonOverlay = ({onBackdropPressFunction,changeInitialDate,ChangeFinalDate,initialDate,finalDate,setCheckChangeDate,checkChangeDate}) => {
  
  const calendar_img = require("../../assets/ferramenta-de-simbolo-de-interface-de-calendario.png");
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={() => {onBackdropPressFunction(false)}}
        overlayStyle={styles.overlay}>
        <Text style={styles.upperText}>Selecione o Data para filtrar:</Text>
        <View 
        style = {styles.dateContainer}>
        <DateInput
          date={initialDate}
          setDate={changeInitialDate}
          placeholder='Data inicial'
          checkChangeDate = {checkChangeDate}
          setCheckChangeDate = {setCheckChangeDate}
        />
        <DateInput
          date={finalDate}
          setDate={ChangeFinalDate}
          placeholder='Data final'
          checkChangeDate = {checkChangeDate}
          setCheckChangeDate = {setCheckChangeDate}
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
  dateContainer:{
    flexDirection: "row", justifyContent: "space-between",
    marginTop:20, 
  },
  image: {
    marginTop: 30,
    width: "35%",
    height: "35%",
    borderRadius: 10,
  },
  cleanButton:{
    backgroundColor:"#F9F9F4",
    borderRadius:10,
    marginTop:10,
    height:30,
    width:90,
    alignItems:"center",
    justifyContent:"center"},

});

export default DateButtonOverlay;
