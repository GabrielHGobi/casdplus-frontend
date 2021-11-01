import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import PaintButton from "../components/PaintButton";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import Spacer from "../components/Spacer";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import DateInput from "../components/DateInput";

const AbsenceScreen = () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [justification, setJustification] = useState("");

  const [date, setDate] = useState(new Date(2021, 1, 22));

  return (
    <View style={styles.container}>
      <Header title='Justificativa de faltas' />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DateInput
          date={initialDate}
          setDate={setInitialDate}
          placeholder='Data inicial'
        />
        <DateInput
          date={finalDate}
          setDate={setFinalDate}
          placeholder='Data final'
        />
      </View>
      <Spacer>
        <FormInput
          containerStyle={{ height: 300, justifyContent: "flex-start" }}
          value={justification}
          onChangeText={setJustification}
          placeholder='Escreva sua justificativa...'
          multiline={true}
          numberOfLines={15}
        />
      </Spacer>
      <PaintButton
        style={styles.paint}
        buttonText='Enviar'
        primaryColor='#f9b342'
        secundaryColor='#3192b3'
        onPress={() => {}}
      />
      {/* <DateTimePicker mode='date' value={date} onChange={changeDate} /> */}
    </View>
  );
};

AbsenceScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3192b3",
    flex: 1,
    paddingHorizontal: 40,
  },
  paint: {
    marginTop: 32,
  },
});

export default AbsenceScreen;
