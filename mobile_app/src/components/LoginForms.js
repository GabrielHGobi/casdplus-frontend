import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import PaintButton from '../components/PaintButton';
import useLogin from '../hooks/useLogin';

const LoginForms = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    [errorMsg, errorType, authenticateAPI] = useLogin();

    let [fontsLoaded] = useFonts({
        'MontserratRegular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('../../assets/fonts/Montserrat-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {

        return (
            <>
                <Input
                    label='Login'
                    labelStyle={styles.labelForm}
                    placeholder='Digite seu email do curso'
                    errorMessage={errorType==='login' ? errorMsg : ''}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    value={login}
                    onChangeText={setLogin}
                />
                <Input
                    label='Senha'
                    labelStyle={styles.labelForm}
                    placeholder='Digite sua senha cadastrada'
                    errorMessage={errorType==='senha' ? errorMsg : ''}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />
                <PaintButton 
                    buttonText="Entrar" 
                    primaryColor='#3192b3' 
                    secundaryColor='#f9b342' 
                    onPress={() => authenticateAPI(login, password)}
                />
            </>
        );
    }
};

const styles = StyleSheet.create({
    labelForm: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});

export default LoginForms;