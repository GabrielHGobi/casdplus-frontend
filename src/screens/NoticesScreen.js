import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import NoticeCard from "../components/NoticeCard";
import { Context as NoticesContext } from '../context/NoticesContext';

const logo_casdvest = require("../../assets/logo_casdvest.png");
const MessageScreen = "Message";
const NoticesScreen = ({ navigation }) => {

  

  const { state, getMessages } = useContext(NoticesContext);

  useEffect(() => {
    getMessages();
    navigation.addListener("didFocus", () => {
      getMessages();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      <ImageBackground //TODO: fix the background
        style={styles.containerBackground}
        imageStyle={styles.imageBackground}
        resizeMode='cover'>
        <View style={styles.logoContainer}>
            <Image source={logo_casdvest} style={styles.logo} />
            <Text style={styles.logoText}>Mural de Avisos</Text>
        </View>
        <View style = {styles.filtros}>
          <TouchableOpacity style = {styles.filtroConteudo}>
            <Text style={styles.filtroText}>Tipo</Text>             
          </TouchableOpacity>
          <TouchableOpacity style = {styles.filtroConteudo}>
            <Text style={styles.filtroText}>Data</Text>  
          </TouchableOpacity>  
        </View>
        <View style = {styles.cardContainer}>
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {state.map((item) => (
            <NoticeCard
              key={item.title}
              cardProps={item}
              navScreen={MessageScreen}
            />
          ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};
NoticesScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
  containerBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3192b3",
  },
  scrollContainer:{  },
  imageBackground: {},
  logo: {},
  logoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  logoText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 24,
    color: "white",
    marginTop: 30,
  },
  cardContainer: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  filtros:{
    marginTop:32,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtroConteudo:{
    paddingHorizontal:20,
    backgroundColor:"#F1F1F0",
    borderRadius:5,
  },
  filtroText:{
    fontSize:20,
    color: "black"
  },
});

export default NoticesScreen;
