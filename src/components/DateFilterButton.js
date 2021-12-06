import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context as NoticesContext } from "../context/NoticesContext";

const DateFilterButton = ({ onPress }) => {
  const { state } = useContext(NoticesContext);
  var text = "Data inicial - Data final";
  if (state.params.start_date) {
    const startDate = state.params.start_date;
    const endDate = state.params.end_date;
    let startDateFormated =
      startDate.getDate() +
      "/" +
      (startDate.getMonth() + 1) +
      "/" +
      startDate.getFullYear();
    let endDateFormated =
      endDate.getDate() +
      "/" +
      (endDate.getMonth() + 1) +
      "/" +
      endDate.getFullYear();
    text = startDateFormated + " - " + endDateFormated;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 215,
    height: 35,
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
});

export default DateFilterButton;
