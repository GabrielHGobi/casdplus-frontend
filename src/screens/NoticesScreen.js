import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

import NoticeCard from "../components/NoticeCard";

const logo_casdvest = require("../../assets/logo_casdvest.png");
const cardProps = {
  Example: {
    title: "Material de Biologia postado",
    tipo: "Material",
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image source={logo_casdvest} style={styles.logo} />
            <Text style={styles.logoText}>Mural de Avisos</Text>
          </View>
          <View style={styles.cardContainer}>
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
    width: "100%",
    flex: 1,
    alignContent: "center",
    backgroundColor: "#3192b3",
  },
  imageBackground: {
    
  },
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
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // flex: 1,
  },
});

export default NoticesScreen;
