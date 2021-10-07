import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Paint from '../../assets/svg/SvgPaint';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const PaintButton = ({ buttonText, primaryColor, secundaryColor, onPress }) => {
    
    const [buttonColor, setButtonColor] = useState(primaryColor)

    let [fontsLoaded] = useFonts({
        'MontserratRegular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('../../assets/fonts/Montserrat-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {

        return (
            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onPress} 
                    onPressIn={() => setButtonColor(secundaryColor)}
                    onPressOut={()=>setButtonColor(primaryColor)}
                    activeOpacity={0.7}
                    delayPressOut={200}
                    delayPressIn={50}>
                    <Paint fill={buttonColor} style={styles.paint}/>
                    <Text style={styles.text}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
        }
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        position: 'absolute',
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
        color: 'white',
        fontSize: 24
    }
});

export default PaintButton;