import React from "react";
import { View, StyleSheet, Text,ImageBackground } from "react-native";

const MessageScreen = ({navigation}) => {
  const data = new Date(navigation.getParam('createdAt'));
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
  let dataMinutos = data.getMinutes();
  if (dataMinutos < 10){
    dataMinutos = ("0" + dataMinutos);
  }
  let horaFormatada = ((data.getHours() + ":" + dataMinutos));
  return (
    <ImageBackground 
    style = {styles.ImageBackground}
    resizeMode="cover">
      
    <View style = {styles.MessageCard}>
      <View style = {styles.titleContainer}>     
        <Text style={styles.titleText}>{navigation.getParam('title')}</Text>
      </View>
      <View style = {styles.authorContainer}>
        <Text style={styles.authorText}>{navigation.getParam('author').first_name} {navigation.getParam('author').last_name}</Text>   
      </View>
      <View style = {styles.bodyContainer}>     
        <Text style={styles.bodyText}>{navigation.getParam('body')}</Text>
      </View>
      <View style = {styles.infoContainer}>
        <View style={styles.tipoContainer}>    
         <Text style={styles.infoText}>Material</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.infoText}>{dataFormatada}</Text>
          <Text style={styles.infoText}>{horaFormatada}</Text>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground:{
    backgroundColor: "#3192b3",
    flex:1,

  },
  MessageCard:{
    backgroundColor: "#F9F9F4",
    marginHorizontal: 30,
    marginVertical: 80,
    borderRadius:30,
    alignItems: "center",
    flex:1,
  },
  titleContainer:{
    justifyContent: "center",
    flex: 0.1,
    marginTop:20,
  },
  titleText:{
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    padding:5,
    // backgroundColor:"red",
  },
  authorContainer:{
    justifyContent: "center",
    marginTop: 5,
    flex:0.1,
  },
  authorText:{
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  bodyContainer:{
    flex: 0.7,
    marginHorizontal: 30,
    marginTop:20,
    marginBottom:40,
  },
  bodyText:{
    fontFamily: "MontserratRegular",
    fontSize: 14,
  },
  infoContainer:{
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    // Bottom: 18,
  },
  infoText:{
    fontFamily: "MontserratRegular",
    fontSize: 18,
  },
  tipoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#D1FEBC",
    flex:1,
    borderRadius: 5,
    marginHorizontal:20,
  },
  dateContainer: {
    justifyContent: "center",
    flex:1,
    alignItems: "center",
    marginHorizontal:20,
  },
});

MessageScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default MessageScreen;