import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import PaintButton from '../components/PaintButton';
import useLogin from '../hooks/useLogin';

const LoginForms = ({ navigation }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    [authenticateAPI] = useLogin();

    let [fontsLoaded] = useFonts({
        'MontserratRegular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('../../assets/fonts/Montserrat-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {

        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Input
                    label='Login'
                    labelStyle={styles.labelForm}
                    inputContainerStyle={styles.inputTextContainer}
                    containerStyle={styles.inputContainer}
                    placeholder='Digite seu email do curso'
                    renderErrorMessage={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    value={login}
                    inputStyle={styles.inputText}
                    onChangeText={setLogin}
                    />
                <Input
                    label='Senha'
                    labelStyle={styles.labelForm}
                    inputContainerStyle={styles.inputTextContainer}
                    containerStyle={styles.inputContainer}
                    placeholder='Digite sua senha cadastrada'
                    renderErrorMessage={false}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    inputStyle={styles.inputText}
                    onChangeText={setPassword}
                />
                <PaintButton
                    style={styles.paint} 
                    buttonText="Entrar" 
                    primaryColor='#3192b3' 
                    secundaryColor='#f9b342' 
                    onPress={() => {
                        authenticateAPI(login, password);
                        navigation.navigate('Home');
                    }}
                />
                <TouchableOpacity style={{alignSelf: 'center', marginTop: 10}}>
                    <Text style={styles.pswReminder}>Esqueci a senha</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};

const styles = StyleSheet.create({
    labelForm: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#70706f'
    },
    inputContainer: { 
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginTop: 25
    },
    inputTextContainer: {
        borderColor: '#70706f',
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        marginTop: 5,
        paddingHorizontal: 5
    },
    inputText: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
        fontSize: 16
    },
    paint: {
        marginTop: 32
    },
    pswReminder: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#BEBEBE',
        textDecorationLine: 'underline'
    }
});

export default LoginForms;