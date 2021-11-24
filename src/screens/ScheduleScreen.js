import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import PDFReader from "rn-pdf-reader-js";
import { Context as AuthContext } from "../context/AuthContext";

const ScheduleScreen = () => {
  const { state } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header title='Cronograma de aulas' />
      <PDFReader
        source={{
          uri: "https://casdplus.herokuapp.com/student/schedule",
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }}
        style={styles.pdf}
        customStyle={{
          readerContainer: {},
          readerContainerNumbers: {},
          readerContainerNavigate: {
            color: "white",
            backgroundColor: "#185d6d",
          },
        }}
        withPinchZoom={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3192b3",
    paddingHorizontal: 30,
  },
  pdf: {
    marginBottom: 30,
  },
});

ScheduleScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default ScheduleScreen;
