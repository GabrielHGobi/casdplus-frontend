import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const FormInput = ({
  containerStyle,
  value,
  onChangeText,
  placeholder,
  multiline,
  numberOfLines,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.text}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlign='left'
        autoCorrect={false}
        placeholderTextColor='#C7C7CD'
      />
    </View>
  );
};

FormInput.defaultProps = {
  multiline: false,
  numberOfLines: 1,
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#f9b342",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 14,
    textAlignVertical: "top",
  },
});

export default FormInput;
