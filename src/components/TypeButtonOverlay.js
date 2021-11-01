import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";


const TypeButtonOverlay = ({onBackdropPressFunction}) => {
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={() => {onBackdropPressFunction(false)}}
        overlayStyle={styles.overlay}>
        <Text style={styles.upperText}>Selecione o tipo para filtrar:</Text>
        <View style={styles.stylesContainer}>
          <View style={[styles.tipoContainer, {backgroundColor:"#D1FEBC"}]}>
            <Text style={styles.tipo}>Material</Text>
          </View>
          <View style={[styles.tipoContainer, {backgroundColor:"#FFC5B2"}]}>
            <Text style={styles.tipo}>Simulado</Text>
          </View>
        </View>
        <View style={styles.stylesContainer}>
          <View style={[styles.tipoContainer, {backgroundColor:"#F9B342"}]}>
            <Text style={styles.tipo}>Aula</Text>
          </View>
          <View style={[styles.tipoContainer, {backgroundColor:"#B4B2FF"}]}>
            <Text style={styles.tipo}>Prova</Text>
          </View>
        </View>
        <View style={styles.stylesContainer}>
          <View style={[styles.tipoContainer, {backgroundColor:"#FF6431"}]}>
            <Text style={styles.tipo}>Aviso</Text>
          </View>
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
    height:25,
  },
  tipo :{
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
});

export default TypeButtonOverlay;
