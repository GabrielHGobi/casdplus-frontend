import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert} from "react-native";
import PaintButton from "../components/PaintButton";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import Spacer from "../components/Spacer";
import DateInput from "../components/DateInput";
import UploadImageButton from "../components/UploadImageButton";

import { Context as AbsenceContext } from "../context/AbsenceContext";

const AbsenceScreen = () => {
  var formdata = new FormData();
  const [date, setDate] = useState(new Date());
  const [justification, setJustification] = useState("");
  const [imageURI, setImageURI] = useState(null);

  const { sendAbsenceJustification } = useContext(AbsenceContext);
  const createTwoButtonAlert = (campo,mensagem) =>
    Alert.alert('Erro no Envio', 'Por favor, preencha o Campo de '+ campo+'. '+ mensagem, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  const sendAbscence = () => {
    sendAbsenceJustification(formdata);
    setJustification("");
    setImageURI(null);
    setDate(new Date());
  };
  const checkAlert = () => {
    const now = new Date();
    if (justification == ""){
      createTwoButtonAlert('Justificativa','Esse campo não pode ser vazio.');
    }else if(((now.getDay() == date.getDay())&& (now.getMonth() == date.getMonth()) && (now.getFullYear() == date.getFullYear()))){
      createTwoButtonAlert('Data','A data não pode ser o dia de hoje');
    } else {
      sendAbscence()
    };
  };
  return (
    <View style={styles.container}>
      <Header title='Justificativa de faltas' />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DateInput
          date={date}
          setDate={setDate}
          placeholder='Data da justificativa'
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

      <UploadImageButton setImage={setImageURI} />

      <PaintButton
        style={styles.paint}
        buttonText='Enviar'
        primaryColor='#f9b342'
        secundaryColor='#3192b3'
        onPress={() => {
          formdata.append("date", date);
          formdata.append("justification", justification);
          formdata.append("file", imageURI);
          checkAlert()

        }}
      />
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
