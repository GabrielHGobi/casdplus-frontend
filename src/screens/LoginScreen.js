import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

// Custom components
import PaintButton from "../components/PaintButton";
import LoginInput from "../components/LoginInput";
import LoginErrorOverlay from "../components/LoginErrorOverlay";

import { Context as AuthContext } from "../context/AuthContext";

// Load assets
const bgImg = require("../../assets/aprovados.png");
const logoImg = require("../../assets/casd-plus.png");

const LoginScreen = ({ navigation }) => {
  // hooks to handle the user login information
  const { state, signup, tryagain } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ImageBackground
        source={bgImg}
        resizeMode='cover'
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logoImg} />
          </View>
          <View style={styles.formContainer}>
            <LoginInput
              label='Login'
              placeholder='Digite seu email do curso'
              value={username}
              setValue={setUsername}
              secureTextEntry={false}
              style={styles.input}
            />
            <LoginInput
              label='Senha'
              placeholder='Digite sua senha cadastrada'
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              style={styles.input}
            />
            <PaintButton
              style={styles.paint}
              buttonText='Entrar'
              primaryColor='#3192b3'
              secundaryColor='#f9b342'
              onPress={() => {
                signup({ username, password });
              }}
            />
            {state.errorMessage ? (
              <LoginErrorOverlay onBackdropPressFunction={tryagain} />
            ) : null}
            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 10 }}
              onPress={null}>
              <Text style={styles.pswReminder}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(40, 127, 154, 0.8)",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: "100%",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  paint: {
    marginTop: 32,
  },
  pswReminder: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 12,
    color: "#BEBEBE",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
