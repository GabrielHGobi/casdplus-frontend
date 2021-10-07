import React from 'react';
import { View, StyleSheet, ImageBackground, Image, StatusBar } from 'react-native';
import LoginForms from '../components/LoginForms';


const bg_image = require('../../assets/aprovados.png');

const LoginScreen = () => {

  return (
    <>
      <StatusBar backgroundColor='#195967' />
      <ImageBackground source={bg_image} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/casd-plus.png')} />
          </View>
          <View style={styles.formContainer}>
            <LoginForms />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(40, 127, 154, 0.8)',
    flex: 1
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  logo: {
    width: '100%'
  },
  formContainer: {
    flex: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-around'
  }
});

export default LoginScreen;