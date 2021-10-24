import React, { useState, useEffect } from "react";
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

const logo_casdvest = require("../../assets/logo_casdvest.png");
const cardProps = {
  Example: {
    title: "Material de Biologia postado",
    tipo: "Material",
    date: "15/10/21",
  },
  Example2: {
    title: "Professor Lucas Saiu do curso",
    tipo: "Aviso",
    date: "15/10/21",
  },
  
};

const NoticesScreen = ({ navigation }) => {

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
        <ScrollView showsVerticalScrollIndicator={false}
        style = {styles.scrollContainer}>
          
          <View style={styles.cardContainer}>
            <NoticeCard cardProps={cardProps.Example}/>
            <NoticeCard cardProps={cardProps.Example2}/>
            <NoticeCard cardProps={cardProps.Example}/>
            <NoticeCard cardProps={cardProps.Example2}/>
            <NoticeCard cardProps={cardProps.Example}/>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
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
  scrollContainer:{ marginTop: 15, },
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
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: "100%",
    // position: "relative",
    // bottom: "0%",
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
