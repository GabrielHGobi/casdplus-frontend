import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import NoticeCard from "../components/NoticeCard";
import TypeButtonOverlay from "../components/TypeButtonOverlay";
import DateButtonOverlay from "../components/DateButtonOverlay";

import { Context as NoticesContext } from "../context/NoticesContext";

const NoticesScreen = ({ navigation }) => {
  const { state, getMessages } = useContext(NoticesContext);

  useEffect(() => {
    getMessages();
    const listener = navigation.addListener("didFocus", () => {
      getMessages();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const [pressedType, setPressedType] = useState(false);
  const [pressedDate, setPressedDate] = useState(false);

  return (
    <>
      <View style={styles.containerBackground}>
        <Header title='Mural de avisos' />
        <View style={styles.filtros}>
          <TouchableOpacity
            style={styles.filtroConteudo}
            onPress={() => {
              setPressedType(true);
            }}>
            <Text style={styles.filtroText}>Tipo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filtroConteudo}
            onPress={() => {
              setPressedDate(true);
            }}>
            <Text style={styles.filtroText}>Data</Text>
          </TouchableOpacity>
        </View>
        {pressedType ? (
          <TypeButtonOverlay onBackdropPressFunction={setPressedType} />
        ) : null}
        {pressedDate ? (
          <DateButtonOverlay onBackdropPressFunction={setPressedDate} />
        ) : null}
        <View style={styles.cardContainer}>
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            {state.map((item) => (
              <NoticeCard
                key={item.title}
                cardProps={item}
                navScreen={"Message"}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

NoticesScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: "#3192b3",
  },
  cardContainer: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  filtros: {
    // marginTop: 32,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtroConteudo: {
    paddingHorizontal: 20,
    backgroundColor: "#F1F1F0",
    borderRadius: 5,
  },
  filtroText: {
    fontSize: 20,
    color: "black",
  },
});

export default NoticesScreen;
