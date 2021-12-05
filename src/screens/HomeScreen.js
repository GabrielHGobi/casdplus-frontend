import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Button,
} from "react-native";
import ScreenCard from "../components/ScreenCard";
import Header from "../components/Header";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as StudentContext } from "../context/StudentContext";
import PaintButton from "../components/PaintButton";

const home_bg = require("../../assets/home_bg.png");
const cardProps = [
  {
    id: "1",
    title: "Calendário\ndo ano",
    subtitle: "Eventos importantes",
    img: require("../../assets/calendar_img.png"),
    navScreen: "Calendar",
  },
  {
    id: "2",
    title: "Mural\nde avisos",
    subtitle: "Informações gerais",
    img: require("../../assets/notices_img.png"),
    navScreen: "Notices",
  },
  {
    id: "3",
    title: "Horário\nde aulas",
    subtitle: "Acesse seu cronograma\nsemanal",
    img: require("../../assets/schedule_img.png"),
    navScreen: "Schedule",
  },
  {
    id: "4",
    title: "Justificativa\nde faltas",
    subtitle: "Preencha o documento",
    img: require("../../assets/absence_img.png"),
    navScreen: "Absence",
  },
];

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(StudentContext);
  const { signout } = useContext(AuthContext);
  return (
    <>
      <ImageBackground //TODO: fix the background
        source={home_bg}
        style={styles.containerBackground}
        resizeMode='cover'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title={`Bem-vindo, ${state.first_name}!`}
            textStyle={{ fontSize: 24 }}
          />
          {cardProps.map((item) => (
            <ScreenCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
              navScreen={item.navScreen}
            />
          ))}
          <PaintButton
        style={styles.paint}
        buttonText='Logout'
        primaryColor='#f9b342'
        secundaryColor='#3192b3'
        onPress={signout}
      />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerBackground: {
    width: "100%",
    flex: 1,
    alignContent: "center",
    backgroundColor: "#3192b3",
  },
  paint: {
    marginVertical: 20,
  },
});

export default HomeScreen;
