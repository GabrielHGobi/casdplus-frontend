import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const LoginInput = ({
  label,
  placeholder,
  value,
  setValue,
  secureTextEntry,
  style,
}) => {
  return (
    <>
      <Input
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        containerStyle={style}
        inputContainerStyle={styles.textContainer}
        inputStyle={styles.text}
        labelStyle={styles.label}
        label={label}
        autoCorrect={false}
        autoCapitalize='none'
        renderErrorMessage={false}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    color: "#70706f",
  },
  textContainer: {
    borderColor: "#70706f",
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    marginTop: 5,
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 16,
  },
});

export default LoginInput;
