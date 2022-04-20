import React, { useState, useContext } from "react";
import { 
    View, 
    StyleSheet, 
    Alert, 
    Text,
    ScrollView,
    ImageBackground,
    Linking,
} from "react-native";
import Header from "../components/Header";
import { Context as FormContext } from "../context/FormContext";
import PaintButton from "../components/PaintButton";
const FormScreen = () => {
    const apiGet = {
        "title": "Voluntário para passeio parque",
        "body": " Boa tarde galera,Tudo bem? Gostaria de saber quem tem interesse em visitar o parque nos dias 10/05 e 11/5.\n Preencham até sexta!!!\n Beijos e Abraços.",
        "url": "http://www.google.com" 
    }
    return(
        <ImageBackground style={styles.ImageBackground} resizeMode='cover'>
        <Header title='Formulário' />
        <View style={styles.MessageCard}>
            <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{apiGet.title}</Text>
            </View>
            <ScrollView style={styles.bodyContainer}>
            <Text style={styles.bodyText}>{apiGet.body}</Text>
            </ScrollView>
            
        </View>
        <PaintButton
                style={styles.paint}
                buttonText='Entrar no Link'
                primaryColor='#f9b342'
                secundaryColor='#3192b3'
                onPress={() => { Linking.openURL(apiGet.url)}}
            />
        </ImageBackground>
    );
};

FormScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
    ImageBackground: {
        backgroundColor: "#3192b3",
        flex: 1,
      },
    paint: {
        marginBottom: 50,
    },
    MessageCard: {
        backgroundColor: "#F9F9F4",
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 30,
        flex: 1,
      },
    titleContainer: {
        justifyContent: "center",
        flex: 0.1,
        marginTop: 30,
        marginHorizontal: 30,
      },
      titleText: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
        fontSize: 22,
        lineHeight: 20,
        padding: 5,
      },
      bodyContainer: {
        flex: 0.8,
        marginHorizontal: 30,
        marginTop: 25,
        marginBottom: 40,
        alignContent: "center",
      },
      bodyText: {
        fontFamily: "MontserratRegular",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
      },
});

export default FormScreen;
