import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

import ScreenCard from "../components/ScreenCard";

import useStudent from "../hooks/useStudent";

const home_bg = require("../../assets/home_bg.png");
const logo_casdvest = require("../../assets/logo_casdvest.png");
const cardProps = {
  CalendarCard: {
    title: "Calendário\ndo ano",
    subtitle: "Eventos importantes",
    img: require("../../assets/calendar_img.png"),
  },
  NoticesCard: {
    title: "Mural\nde avisos",
    subtitle: "Informações gerais",
    img: require("../../assets/notices_img.png"),
  },
  EssaysCard: {
    title: "Simulados\ne avaliações",
    subtitle: "Acesse seus resultados",
    img: require("../../assets/essays_img.png"),
  },
  ScheduleCard: {
    title: "Horário\nde aulas",
    subtitle: "Acesse seu cronograma\nsemanal",
    img: require("../../assets/schedule_img.png"),
  },
  AbscenseCard: {
    title: "Justificativa\nde faltas",
    subtitle: "Preencha o documento",
    img: require("../../assets/absence_img.png"),
  },
};

const HomeScreen = ({ navigation }) => {
  const [getStudentInfo, info] = useStudent();
  const [name, setName] = useState("");

  /*  useEffect(() => {
    getStudentInfo();
  }, []);
 */
  return (
    <>
      <ImageBackground //TODO: fix the background
        source={home_bg}
        style={styles.containerBackground}
        imageStyle={styles.imageBackground}
        resizeMode='cover'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image source={logo_casdvest} style={styles.logo} />
            <Text style={styles.logoText}>Bem-vindo, {name}!</Text>
          </View>
          <View style={styles.cardContainer}>
            <ScreenCard
              cardProps={cardProps.AbscenseCard}
              navigate={() => {
                getStudentInfo();
                setName(info.first_name);
              }}
            />
            <ScreenCard
              cardProps={cardProps.ScheduleCard}
              navigate={() => navigation.navigate("Schedule")}
            />
            <ScreenCard
              cardProps={cardProps.CalendarCard}
              navigate={() => navigation.navigate("Calendar")}
            />
            <ScreenCard
              cardProps={cardProps.NoticesCard}
              navigate={() => navigation.navigate("Notices")}
            />
            <ScreenCard
              cardProps={cardProps.EssaysCard}
              navigate={() => navigation.navigate("Essays")}
            />
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
    marginTop: 30,
  },
});

export default HomeScreen;
