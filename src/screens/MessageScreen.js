import React from "react";
import { View, StyleSheet, Text,ImageBackground } from "react-native";

const MessageScreen = ({route, navigation}) => {
  return (
    <ImageBackground 
    style = {styles.ImageBackground}
    resizeMode="cover">
      
    <View style = {styles.MessageCard}>
      <View style = {styles.titleContainer}>     
        <Text style={styles.titleText}>Títulos</Text>
      </View>
      <View style = {styles.authorContainer}>
        <Text style={styles.authorText}>Autor</Text>   
      </View>
      <View style = {styles.bodyContainer}>     
        <Text style={styles.bodyText}>Conteúdolajksdlakjsdlajksldkjasdaskdjlçaskjdlakjsdlçakjsdlçaksjdalskjdalçskjdalçskjdaçlksjdlça</Text>
      </View>
      <View style = {styles.infoContainer}>
        <View style={styles.tipoContainer}>    
         <Text style={styles.infoText}>Material</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.infoText}>22/10/21</Text>
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
    marginTop:30,
  },
  titleText:{
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 18,
  },
  authorContainer:{
    justifyContent: "center",
    marginTop: 5,
    flex:0.1,
  },
  authorText:{
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
  },
  bodyContainer:{
    flex: 0.7,
    marginHorizontal: 30,
    marginTop:20,
    marginBottom:40,
  },
  bodyText:{
    fontFamily: "MontserratRegular",
    fontSize: 16,
  },
  infoContainer:{
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor:"red",
    // Bottom: 18,
  },
  infoText:{
    fontFamily: "MontserratSemiBold",
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