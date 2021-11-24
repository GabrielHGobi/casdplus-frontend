import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

const MessageScreen = ({ navigation }) => {
  const data = new Date(navigation.getParam("createdAt"));
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  let dataFormatada =
    data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();
  let dataMinutos = data.getMinutes();
  let dataHoras = data.getHours();
  if (dataMinutos < 10) {
    dataMinutos = "0" + dataMinutos;
  }
  if (dataHoras < 10) {
    dataHoras = "0" + dataHoras;
  }
  const labelDict = {
    1: { title: "Evento", color: "#D1FEBC" },
    2: { title: "Horário", color: "#FFC5B2" },
    3: { title: "Material", color: "#F9B342" },
    4: { title: "Simulado", color: "#B4B2FF" },
    5: { title: "Vestibular", color: "#FF6431" },
    6: { title: "Outros", color: "#45ECCE" },
  };
  let horaFormatada = dataHoras + ":" + dataMinutos;

  const adminIcon = require("../../assets/admin_icon.png");
  return (
    <ImageBackground style={styles.ImageBackground} resizeMode='cover'>
      <View style={styles.MessageCard}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{navigation.getParam("title")}</Text>
        </View>
        <View style={styles.authorContainer}>
          <Image source={adminIcon} style={styles.image} />
          <Text style={styles.authorText}>
            {navigation.getParam("author").first_name}{" "}
            {navigation.getParam("author").last_name}
          </Text>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{navigation.getParam("body")}</Text>
        </ScrollView>
        <View style={styles.infoContainer}>
          <View
            style={[
              styles.tipoContainer,
              {
                backgroundColor:
                  labelDict[navigation.getParam("label_id")].color,
              },
            ]}>
            <Text style={styles.infoText}>
              {labelDict[navigation.getParam("label_id")].title}
            </Text>
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
  ImageBackground: {
    backgroundColor: "#3192b3",
    flex: 1,
  },
  MessageCard: {
    backgroundColor: "#F9F9F4",
    marginHorizontal: 30,
    marginVertical: 80,
    borderRadius: 30,
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    flex: 0.1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  titleText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    padding: 5,
    // backgroundColor:"red",
  },
  authorContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    // marginTop: 5,
    flex: 0.15,
  },
  authorText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  bodyContainer: {
    flex: 0.8,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 40,
  },
  bodyText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
  },
  infoContainer: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    // Bottom: 18,
  },
  infoText: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
  },
  tipoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  dateContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    width: "20%",
    height: "70%",
  },
});

MessageScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default MessageScreen;
