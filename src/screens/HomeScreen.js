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

const home_bg = require("../../assets/home_bg.png");
const logo_casdvest = require("../../assets/logo_casdvest.png");
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
    title: "Simulados\ne avaliações",
    subtitle: "Acesse seus resultados",
    img: require("../../assets/essays_img.png"),
    navScreen: "Essays",
  },
  {
    id: "4",
    title: "Horário\nde aulas",
    subtitle: "Acesse seu cronograma\nsemanal",
    img: require("../../assets/schedule_img.png"),
    navScreen: "Schedule",
  },
  {
    id: "5",
    title: "Justificativa\nde faltas",
    subtitle: "Preencha o documento",
    img: require("../../assets/absence_img.png"),
    navScreen: "Absence",
  },
];

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(StudentContext);
  const { signout } = useContext(AuthContext);

  const [name, setName] = useState("NOME_ALUNO");

  return (
    <>
      <ImageBackground //TODO: fix the background
        source={home_bg}
        style={styles.containerBackground}
        imageStyle={styles.imageBackground}
        resizeMode='cover'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title={`Bem-vindo, ${state.name}!`}
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
          <Button title='Logout' onPress={signout} />
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
});

export default HomeScreen;
