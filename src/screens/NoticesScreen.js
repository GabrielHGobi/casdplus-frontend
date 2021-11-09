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
  const [cards, setCards] = useState(state);
  const [filterTypeValue, setfilterTypeValue] = useState(0);
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const[checkChangeDate,setCheckChangeDate] = useState(0);
  const clearButton = () =>{
    setCards(state);
    setfilterTypeValue(0);
    setInitialDate(new Date());
    setFinalDate(new Date())
    setCheckChangeDate(0);
  }
  useEffect(() => {
    getMessages();
    const listener = navigation.addListener("didFocus", () => {
      getMessages();
    });
  
    return () => {
      listener.remove();
    };
  }, []);
  useEffect(() => {
    if(filterTypeValue == 0){
      setCards(state);
    }
    else{
      const filtered = cards.filter(item => item.label_id == filterTypeValue);
      setCards(filtered);
    }
  },[filterTypeValue]);
  useEffect(()=>{
    if(checkChangeDate!=0){
      const filtered = cards.filter(
        item => new Date(item.createdAt).getTime() >= new Date(initialDate).getTime() && 
        new Date(item.createdAt).getTime() <= new Date(finalDate).getTime());
      setCards(filtered)
    }
  },[checkChangeDate]);
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
          <TypeButtonOverlay onBackdropPressFunction={setPressedType} filterType = {setfilterTypeValue} actualFilter = {filterTypeValue}/>
        ) : null}
        {pressedDate ? (
          <DateButtonOverlay onBackdropPressFunction={setPressedDate}
          initialDate = {initialDate}
          finalDate = {finalDate} 
          changeInitialDate = {setInitialDate}  
          ChangeFinalDate = {setFinalDate}
          setCheckChangeDate = {setCheckChangeDate}
          checkChangeDate = {checkChangeDate}/>
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
    // marginTop: 32,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtroConteudo: {
    justifyContent:"center",
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
