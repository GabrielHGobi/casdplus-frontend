import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Custom components
import PaintButton from "../components/PaintButton";
import LoginInput from "../components/LoginInput";
import LoginErrorOverlay from "../components/LoginErrorOverlay";

// Custom hooks
import useLogin from "../hooks/useLogin";

// Load assets
const bgImg = require("../../assets/aprovados.png");
const logoImg = require("../../assets/casd-plus.png");

const LoginScreen = ({ navigation }) => {
  // hooks to handle the user login information
  [login, setLogin, password, setPassword, authenticateAPI] = useLogin();

  // hooks to handle the overlay message in login error
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // fonts to be used in all app
  let [fontsLoaded] = useFonts({
    MontserratRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  // to wait the fonts load
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar backgroundColor='#195967' />
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
                value={login}
                setValue={setLogin}
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
                  authenticateAPI();
                  navigation.navigate("Home");
                }}
              />
              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 10 }}
                onPress={toggleOverlay}>
                <Text style={styles.pswReminder}>Esqueci a senha</Text>
              </TouchableOpacity>
              <LoginErrorOverlay
                visible={visible}
                toggleOverlay={toggleOverlay}
              />
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
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
