import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

const DateInput = ({ date, setDate, placeholder }) => {
  const [show, setShow] = useState(false);
  const [dateChanged, setDateChanged] = useState(false);

  let formattedDate = format(date, "dd/MM/yyyy");
  const changeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    formattedDate = format(date, "dd/MM/yyyy");
    setShow(false);
    setDateChanged(true);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {dateChanged ? formattedDate : placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker value={date} mode='date' onChange={changeDate} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    borderColor: "#f9b342",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
  },
});

export default DateInput;
