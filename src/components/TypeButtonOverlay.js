import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { Overlay } from "react-native-elements";


const TypeButtonOverlay = ({onBackdropPressFunction, filterType, actualFilter}) => {
  const [tempFilter, setTempFilter] = useState(actualFilter);
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={() => {onBackdropPressFunction(false);filterType(tempFilter)}}
        overlayStyle={styles.overlay}>
        <Text style={styles.upperText}>Selecione o tipo para filtrar:</Text>
        <View style={styles.stylesContainer}>
          <TouchableOpacity onPress = {() =>{setTempFilter(1)}} style={[styles.tipoContainer, {backgroundColor:"#D1FEBC"}]}>
            <Text style={styles.tipo}>Evento</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{setTempFilter(2)}} style={[styles.tipoContainer, {backgroundColor:"#FFC5B2"}]}>
            <Text style={styles.tipo}>Horário</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stylesContainer}>
          
          <TouchableOpacity onPress = {() =>{setTempFilter(3)}} style={[styles.tipoContainer, {backgroundColor:"#F9B342"}]}>
            <Text style={styles.tipo}>Material</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{setTempFilter(4)}} style={[styles.tipoContainer, {backgroundColor:"#B4B2FF"}]}>
            <Text style={styles.tipo}>Simulado</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stylesContainer}>
          
          <TouchableOpacity onPress = {() =>{setTempFilter(5)}} style={[styles.tipoContainer, {backgroundColor:"#FF6431"}]}>
            <Text style={styles.tipo}>Vestibular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{setTempFilter(5)}} style={[styles.tipoContainer, {backgroundColor:"#45ECCE"}]}>
            <Text style={styles.tipo}>Outros</Text>
          </TouchableOpacity>
        </View>
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
  
  stylesContainer:{
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },

  tipoContainer: {
    alignItems: "center",
    justifyContent:"center",
    flex:1,
    borderRadius: 5,
    marginHorizontal:20,
    width: 100,
    height:35,
  },
  tipo :{
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
});

export default TypeButtonOverlay;
