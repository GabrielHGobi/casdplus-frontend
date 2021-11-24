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
  const [cards, setCards] = useState(state.messages);

  const [label_id, setLabel_id] = useState(0);
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());

  useEffect(() => {
    getMessages({ initialDate, finalDate, label_id });
    console.log(state.messages);
    const listener = navigation.addListener("didFocus", () => {
      getMessages({ initialDate, finalDate, label_id });
    });
    return () => {
      listener.remove();
    };
  }, [initialDate, finalDate, label_id]);

  const clearButton = () => {
    setLabel_id(0);
    setInitialDate(new Date());
    setFinalDate(new Date());
  };

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
              clearButton();
            }}>
            <Text style={styles.filtroText}>Limpar</Text>
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
          <TypeButtonOverlay
            onBackdropPressFunction={setPressedType}
            filterType={setLabel_id}
            actualFilter={label_id}
          />
        ) : null}

        {pressedDate ? (
          <DateButtonOverlay
            onBackdropPressFunction={setPressedDate}
            initialDate={initialDate}
            finalDate={finalDate}
            changeInitialDate={setInitialDate}
            ChangeFinalDate={setFinalDate}
          />
        ) : null}

        <View style={styles.cardContainer}>
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            {cards.map((item) => (
              <NoticeCard
                key={item.id}
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
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtroConteudo: {
    justifyContent: "center",
    height: 35,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F4",
    borderRadius: 5,
  },
  filtroText: {
    fontSize: 20,
    color: "black",
  },
});

export default NoticesScreen;
